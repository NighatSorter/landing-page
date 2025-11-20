# Deployment Guide - Option 2 (Reverse Proxy)

This setup uses a single domain with Nginx reverse proxy routing `/api/*` requests to the Flask backend.

## Architecture

```
Client Request
    ↓
https://nighat.com/ → Nginx (Frontend - React)
https://nighat.com/api/* → Nginx → Flask Backend (Port 5000)
```

## Local Development with Docker Compose

### 1. Setup Environment Variables

Edit `backend/.env` with your Gmail credentials:

```bash
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-gmail-app-password
RECEIVER_EMAIL=recipient@example.com
FLASK_ENV=production
```

### 2. Build and Run

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

### 3. Test Locally

- **Frontend:** http://localhost:8080
- **Backend API:** http://localhost:8080/api/health
- **Contact Form:** http://localhost:8080/contact

### 4. Stop Services

```bash
docker-compose down
```

## Production Deployment on AWS EC2

### Prerequisites

- EC2 instance with Docker and Docker Compose installed
- Domain pointed to EC2 static IP
- SSL certificate (Let's Encrypt recommended)

### Step 1: Upload Files to EC2

```bash
# From your local machine
rsync -avz --exclude 'node_modules' --exclude 'dist' --exclude '.git' \
  . ubuntu@your-ec2-ip:/home/ubuntu/landing-page/
```

### Step 2: Setup on EC2

```bash
# SSH into EC2
ssh ubuntu@your-ec2-ip

cd /home/ubuntu/landing-page

# Configure backend environment
nano backend/.env
# Add your Gmail credentials

# Build and run
docker-compose up -d --build
```

### Step 3: Setup Nginx with SSL (on EC2 Host)

Install Nginx and Certbot on EC2 host:

```bash
sudo apt update
sudo apt install nginx certbot python3-certbot-nginx -y
```

Create Nginx configuration for production (`/etc/nginx/sites-available/nighat`):

```nginx
server {
    listen 80;
    server_name nighat.com www.nighat.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/nighat /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Step 4: Setup SSL Certificate

```bash
sudo certbot --nginx -d nighat.com -d www.nighat.com
```

Certbot will automatically update your Nginx config to redirect HTTP to HTTPS.

### Step 5: Auto-renewal

```bash
# Test renewal
sudo certbot renew --dry-run

# Certbot automatically sets up a cron job
```

## Updating the Application

### Update Frontend or Backend

```bash
# SSH into EC2
ssh ubuntu@your-ec2-ip
cd /home/ubuntu/landing-page

# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build
```

### Update Only Frontend

```bash
docker-compose up -d --build frontend
```

### Update Only Backend

```bash
docker-compose up -d --build backend
```

## Monitoring and Logs

### View Logs

```bash
# All services
docker-compose logs -f

# Frontend only
docker-compose logs -f frontend

# Backend only
docker-compose logs -f backend
```

### Check Service Status

```bash
docker-compose ps
```

### Health Check

```bash
# Backend API health
curl http://localhost:8080/api/health

# Or from outside
curl https://nighat.com/api/health
```

## Troubleshooting

### Backend can't send emails

1. Check Gmail App Password is correct in `backend/.env`
2. Ensure 2FA is enabled on Gmail account
3. Check backend logs: `docker-compose logs backend`

### CORS errors

1. Ensure Nginx proxy headers are set correctly
2. Check Flask CORS configuration in `backend/app.py`
3. Verify requests are going through Nginx reverse proxy

### 502 Bad Gateway

1. Check if backend service is running: `docker-compose ps`
2. Check backend logs: `docker-compose logs backend`
3. Verify network connectivity between containers

### SSL Certificate Issues

```bash
# Check certificate status
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal
```

## Rollback

If something goes wrong:

```bash
# Stop current deployment
docker-compose down

# Go back to previous version
git checkout <previous-commit>

# Rebuild
docker-compose up -d --build
```

## Security Checklist

- ✅ Use environment variables for sensitive data
- ✅ Enable HTTPS with SSL certificates
- ✅ Set up firewall rules (allow 80, 443, 22 only)
- ✅ Use Gmail App Password (not regular password)
- ✅ Keep Docker images updated
- ✅ Regular backups of configuration files
- ✅ Monitor logs for suspicious activity

## Performance Tips

- Use `docker-compose up -d` to run in background
- Monitor container resource usage: `docker stats`
- Set up log rotation to prevent disk space issues
- Consider using a CDN for static assets
- Enable Nginx gzip compression
