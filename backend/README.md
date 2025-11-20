# Nighat Contact Form Backend

Flask-based backend API for handling contact form submissions and sending emails via Gmail SMTP.

## Setup Instructions

### 1. Create Virtual Environment

```bash
cd backend
python3 -m venv venv
```

### 2. Activate Virtual Environment

```bash
# On Linux/Mac
source venv/bin/activate

# On Windows
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your Gmail credentials:

```env
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your-gmail-app-password
RECEIVER_EMAIL=recipient@example.com
```

**Important:** For `SENDER_PASSWORD`, you need to generate a Gmail App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to https://myaccount.google.com/apppasswords
4. Create a new App Password for "Mail"
5. Copy the 16-character password and use it in `.env`

### 5. Run the Server

```bash
python app.py
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact

Receives contact form data and sends email.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "phone": "+1234567890",
  "message": "Your message here",
  "timestamp": "2025-11-20T06:41:12.603Z",
  "language": "ar"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

### GET /api/health

Health check endpoint.

**Response:**

```json
{
  "status": "healthy",
  "service": "Nighat Contact API"
}
```

## Testing

You can test the API using curl:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+1234567890",
    "message": "This is a test message",
    "timestamp": "2025-11-20T06:41:12.603Z",
    "language": "en"
  }'
```

## Updating Frontend

Update the fetch URL in your frontend Contact.tsx:

```typescript
const response = await fetch("http://localhost:5000/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(contactData),
});
```

For production, replace with your production API URL.
