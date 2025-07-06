import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { emailjsConfig, demoEmailJS, isDemoMode } from '../config/emailjs-demo';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiLinkedin, 
  FiGithub, 
  FiSend
} from 'react-icons/fi';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true, margin: "-100px" });
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm();

  // Initialize EmailJS
  useEffect(() => {
    if (isDemoMode) {
      demoEmailJS.init(emailjsConfig.PUBLIC_KEY);
    } else {
      emailjs.init(emailjsConfig.PUBLIC_KEY);
    }
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: "Mohamed Aziz Nasri",
      };

      const emailService = isDemoMode ? demoEmailJS : emailjs;
      const result = await emailService.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.CONTACT_TEMPLATE_ID,
        templateParams
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
          style: {
            background: 'var(--skills-box)',
            color: '#fff',
          },
        });
        reset();
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="contact-section">
      <Toaster position="top-right" />
      
      <motion.div
        ref={contactRef}
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Hero Section */}
        <motion.div className="contact-hero" variants={itemVariants}>
          <h1 className="contact-title">
            Let's Get In Touch
          </h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Drop me a message and let's start the conversation.
          </p>
        </motion.div>

        {/* Single Unified Contact Box */}
        <motion.div 
          className="unified-contact-card"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-content">
            {/* Left Side - Contact Form */}
            <div className="form-section">
              <div className="form-header">
                <motion.div
                  className="form-icon"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiSend />
                </motion.div>
                <h2>Send Me a Message</h2>
                <p>Got a project in mind? Let's discuss it!</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your full name"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name.message}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email.message}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="What's this about? (e.g., Project Collaboration, Job Opportunity, General Inquiry)"
                    {...register('subject', { 
                      required: 'Subject is required',
                      minLength: { value: 3, message: 'Subject must be at least 3 characters' }
                    })}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Share your project details, requirements, timeline, or any questions you have. The more details you provide, the better I can help you!"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    className={errors.message ? 'error' : ''}
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message.message}</span>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isLoading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="loading-spinner"
                    />
                  ) : (
                    <>
                      Send Message
                      <FiSend className="btn-icon" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Right Side - Contact Info */}
            <div className="info-section">
              <div className="info-header">
                <motion.div
                  className="info-icon"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiMail />
                </motion.div>
                <h3>Get In Touch</h3>
                <p>Feel free to reach out through any of these channels</p>
              </div>

              <div className="contact-methods">
                <motion.div 
                  className="contact-method"
                  whileHover={{ x: 5 }}
                >
                  <FiMail className="method-icon" />
                  <div>
                    <span className="method-label">Email</span>
                    <span className="method-value">medaziznasri@email.com</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-method"
                  whileHover={{ x: 5 }}
                >
                  <FiPhone className="method-icon" />
                  <div>
                    <span className="method-label">Phone</span>
                    <span className="method-value">+216 94 198 625</span>
                  </div>
                </motion.div>

                <motion.div 
                  className="contact-method"
                  whileHover={{ x: 5 }}
                >
                  <FiMapPin className="method-icon" />
                  <div>
                    <span className="method-label">Location</span>
                    <span className="method-value">Tunisia</span>
                  </div>
                </motion.div>
              </div>

              <div className="response-info">
                <div className="response-time">
                  <span className="status-indicator"></span>
                  <span>Usually responds in a few hours</span>
                </div>
                <p className="availability">I typically respond within <strong>24 hours</strong> during weekdays.</p>
              </div>

              <div className="social-links">
                <motion.a
                  href="https://linkedin.com/in/medaziznasri"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/medaziznasri"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
