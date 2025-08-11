# EmailJS Setup Guide for ZPPSS Contact Form

## Quick Setup (Recommended)

The contact form is already configured with working EmailJS credentials. Follow these steps to set up your own EmailJS account:

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with your school email: `zppss1978@gmail.com`
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for zppss1978@gmail.com)
4. Follow the OAuth setup to connect your Gmail account
5. Name your service: `zppss_gmail_service`

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

Hello School Administration,

You have received a new message through the school website contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent automatically from the ZPPSS website contact form.
Please reply directly to {{from_email}} to respond to this inquiry.

Best regards,
ZPPSS Website System
```

4. Set template variables:
   - `from_name`
   - `from_email` 
   - `subject`
   - `message`
   - `to_name`
   - `reply_to`

5. In **Settings** tab:
   - **To Email**: `zppss1978@gmail.com`
   - **To Name**: `ZPPSS Administration`
   - **Reply To**: `{{reply_to}}`

### Step 4: Update Environment Variables
1. Copy your Service ID, Template ID, and Public Key from EmailJS dashboard
2. Update the `.env` file with your actual credentials:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id  
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### Step 5: Test the Form
1. Build and deploy your website
2. Fill out the contact form
3. Check `zppss1978@gmail.com` for the test email

## Current Configuration

The form is currently set up to send emails to: **zppss1978@gmail.com**

### Form Fields Mapping:
- **Name** → `from_name`
- **Email** → `from_email` 
- **Subject** → `subject`
- **Message** → `message`

### Email Template Variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Message content
- `{{to_name}}` - Recipient name (School Administration)
- `{{reply_to}}` - Reply-to address (sender's email)

## Troubleshooting

### Common Issues:
1. **Form not sending**: Check browser console for errors
2. **Emails not received**: Check spam folder
3. **Invalid credentials**: Verify Service ID, Template ID, and Public Key

### Testing:
- Use browser developer tools to check network requests
- Look for EmailJS success/error responses
- Verify environment variables are loaded correctly

## Security Notes

- Keep your EmailJS credentials secure
- The `.env` file should be in `.gitignore`
- EmailJS public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose

## Support

For EmailJS support: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
