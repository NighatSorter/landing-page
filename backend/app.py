from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure CORS for reverse proxy setup
CORS(
    app,
    resources={
        r"/api/*": {
            "origins": ["*"],  # In production, replace with your domain
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type"],
        }
    },
)

# Email configuration from .env
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")  # Gmail App Password
RECEIVER_EMAIL = os.getenv("RECEIVER_EMAIL")


def send_email(data):
    """Send email using Gmail SMTP"""
    try:
        # Create message
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"New Contact Form Submission from {data['name']}"
        msg["From"] = SENDER_EMAIL
        msg["To"] = RECEIVER_EMAIL

        # Format the timestamp
        timestamp = datetime.fromisoformat(data["timestamp"].replace("Z", "+00:00"))
        formatted_time = timestamp.strftime("%B %d, %Y at %I:%M %p")

        # Create HTML email body
        html_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                    <h2 style="color: #8B3BFF; border-bottom: 2px solid #8B3BFF; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <p><strong style="color: #555;">Name:</strong> {data['name']}</p>
                        <p><strong style="color: #555;">Email:</strong> <a href="mailto:{data['email']}">{data['email']}</a></p>
                        <p><strong style="color: #555;">Phone:</strong> {data.get('phone', 'Not provided')}</p>
                        <p><strong style="color: #555;">Language:</strong> {data['language'].upper()}</p>
                        <p><strong style="color: #555;">Submitted:</strong> {formatted_time}</p>
                        
                        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                        
                        <p><strong style="color: #555;">Message:</strong></p>
                        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #8B3BFF;">
                            {data['message']}
                        </div>
                    </div>
                    
                    <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
                        This email was sent from Nighat landing page contact form
                    </p>
                </div>
            </body>
        </html>
        """

        # Create plain text version as fallback
        text_body = f"""
        New Contact Form Submission
        
        Name: {data['name']}
        Email: {data['email']}
        Phone: {data.get('phone', 'Not provided')}
        Language: {data['language'].upper()}
        Submitted: {formatted_time}
        
        Message:
        {data['message']}
        
        ---
        This email was sent from Nighat landing page contact form
        """

        # Attach both HTML and plain text versions
        part1 = MIMEText(text_body, "plain")
        part2 = MIMEText(html_body, "html")
        msg.attach(part1)
        msg.attach(part2)

        # Send email
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.send_message(msg)

        return True
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        raise e


@app.route("/api/contact", methods=["POST"])
def contact():
    """Handle contact form submissions"""
    try:
        # Get JSON data from request
        data = request.get_json()

        # Validate required fields
        required_fields = ["name", "email", "message", "timestamp", "language"]
        for field in required_fields:
            if field not in data or not data[field]:
                return (
                    jsonify(
                        {"success": False, "error": f"Missing required field: {field}"}
                    ),
                    400,
                )

        # Send email
        send_email(data)

        return jsonify({"success": True, "message": "Email sent successfully"}), 200

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


@app.route("/api/health", methods=["GET"])
def health():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "service": "Nighat Contact API"}), 200


if __name__ == "__main__":
    # Check if environment variables are set
    if not SENDER_EMAIL or not SENDER_PASSWORD or not RECEIVER_EMAIL:
        print("Warning: Email configuration not found in .env file")
        print("Please set SENDER_EMAIL, SENDER_PASSWORD, and RECEIVER_EMAIL")

    app.run(debug=True, host="0.0.0.0", port=5000)
