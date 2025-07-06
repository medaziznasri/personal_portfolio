// Demo EmailJS Configuration (for testing without EmailJS setup)
// This will simulate email sending with console logs and success messages

export const emailjsConfig = {
  // Demo keys - replace with real ones from EmailJS
  PUBLIC_KEY: "demo_public_key",
  SERVICE_ID: "demo_service",
  CONTACT_TEMPLATE_ID: "demo_contact_template",
  NEWSLETTER_TEMPLATE_ID: "demo_newsletter_template"
};

// Demo EmailJS simulation
export const demoEmailJS = {
  init: (key) => {
    console.log('🔧 EmailJS initialized with key:', key);
  },
  
  send: async (serviceId, templateId, params) => {
    console.log('📧 Demo Email Send:');
    console.log('Service ID:', serviceId);
    console.log('Template ID:', templateId);
    console.log('Parameters:', params);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simulate success
    return { text: 'OK' };
  }
};

// Instructions for switching to real EmailJS
console.log(`
🚀 CONTACT SECTION SETUP

To enable real email functionality:

1. Visit https://emailjs.com and create account
2. Set up email service and templates  
3. Replace demo config in src/config/emailjs.js
4. Update personal info in Contact.jsx

For now, the form will show success messages but won't send real emails.
Check the browser console to see simulated email data.
`);

export const isDemoMode = true;
