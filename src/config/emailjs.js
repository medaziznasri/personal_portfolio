// EmailJS Configuration
// Follow these steps to set up EmailJS:

// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create email templates
// 5. Get your keys and replace the values below

export const emailjsConfig = {
  // Get this from EmailJS dashboard > Account
  PUBLIC_KEY: "YOUR_PUBLIC_KEY_HERE",
  
  // Get this from EmailJS dashboard > Email Services
  SERVICE_ID: "YOUR_SERVICE_ID_HERE",
  
  // Contact form template ID
  CONTACT_TEMPLATE_ID: "YOUR_CONTACT_TEMPLATE_ID_HERE",
  
  // Newsletter subscription template ID  
  NEWSLETTER_TEMPLATE_ID: "YOUR_NEWSLETTER_TEMPLATE_ID_HERE"
};

// Template Variables for Contact Form:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{message}} - sender's message
// {{to_name}} - your name

// Template Variables for Newsletter:
// {{subscriber_email}} - subscriber's email
// {{subscriber_name}} - subscriber's name (optional)
// {{to_name}} - your name

// Example Email Template for Contact:
/*
Subject: New Contact Form Submission from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Best regards,
Your Portfolio Contact Form
*/

// Example Email Template for Newsletter:
/*
Subject: New Newsletter Subscription

Hello {{to_name}},

You have a new newsletter subscriber:

Name: {{subscriber_name}}
Email: {{subscriber_email}}

Best regards,
Your Portfolio Newsletter System
*/
