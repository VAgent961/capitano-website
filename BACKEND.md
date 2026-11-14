# Backend Documentation: Capitano

This project uses a Next.js 14 backend with a Neon PostgreSQL database.

## Database Schema

### Table: `contact_messages`
Stores all submissions from the contact form.
- `id`: Unique identifier (bigserial).
- `created_at`: Timestamp of submission.
- `name`: Customer's name.
- `email`: Customer's email (optional).
- `phone`: Customer's phone number.
- `message`: The message or inquiry.
- `status`: 'new' (default), 'done', or 'cancelled'.

## API Routes

### `POST /api/contact`
Handles contact form submissions.
- Validates required fields (name, phone, message).
- Saves data to the database.
- Sends notifications to the owner via Telegram/Email (if configured).
- Returns a WhatsApp link for the customer to follow up.

## Admin Page
The private admin dashboard is located at `/admin`.
- **Login**: Use the `ADMIN_PASSWORD` set in your environment variables.
- **Features**: View the latest 100 contact messages with timestamps and contact details.

## Environment Variables
To enable full functionality, set the following variables in your hosting provider (e.g., Vercel):

- `DATABASE_URL`: Your Neon PostgreSQL connection string.
- `ADMIN_PASSWORD`: Password for the `/admin` dashboard.
- `ADMIN_SECRET`: A random string for session encryption (set automatically).
- `WHATSAPP_NUMBER`: `96171608833` (digits only).
- `TELEGRAM_BOT_TOKEN`: (Optional) For instant notifications.
- `TELEGRAM_CHAT_ID`: (Optional) Your Telegram chat ID.
- `RESEND_API_KEY`: (Optional) For email notifications.
- `NOTIFY_EMAIL`: (Optional) Email address to receive notifications.

## Later Features
- Customer accounts and login.
- Online ordering and payment integration.
- Table reservation management with real-time availability.
