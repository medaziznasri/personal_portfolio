import image from "../assets/470460950_1308517460166311_4125634053438536026_n.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { emailjsConfig, demoEmailJS, isDemoMode } from '../config/emailjs-demo';
import { FiBell, FiCheck } from "react-icons/fi";

function About() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notifyLoading, setNotifyLoading] = useState(false);
  
  const { 
    register: registerNotify, 
    handleSubmit: handleNotifySubmit, 
    formState: { errors: notifyErrors },
    reset: resetNotify 
  } = useForm();

  useEffect(() => {
    // Initialize EmailJS
    if (isDemoMode) {
      demoEmailJS.init(emailjsConfig.PUBLIC_KEY);
    } else {
      emailjs.init(emailjsConfig.PUBLIC_KEY);
    }
  }, []);

  const onNotifySubmit = async (data) => {
    setNotifyLoading(true);
    
    try {
      const templateParams = {
        subscriber_email: data.email,
        subscriber_name: data.name || 'New Subscriber',
        to_name: "Mohamed Aziz Nasri",
      };

      const emailService = isDemoMode ? demoEmailJS : emailjs;
      const result = await emailService.send(
        emailjsConfig.SERVICE_ID,
        emailjsConfig.NEWSLETTER_TEMPLATE_ID,
        templateParams
      );

      if (result.text === 'OK') {
        setIsSubscribed(true);
        toast.success('Successfully subscribed! You\'ll be notified of new content.', {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#fff',
          },
        });
        resetNotify();
      }
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.', {
        duration: 5000,
        style: {
          background: '#EF4444',
          color: '#fff',
        },
      });
      console.error('EmailJS error:', error);
    } finally {
      setNotifyLoading(false);
    }
  };

  const GithubLink = () => {
    window.open("https://github.com/medaziznasri", "_blank");
  };
  const LinkedIn = () => {
    window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
  };
  const mailMe = () => {
    window.open("mailto:aziznasri11082003@gmail.com", "_blank");
  };
  return (
    <div className="about-container">
      <Toaster position="top-right" />
      
      <div className="about">
        <div className="para">
          <span className="myName"> Hi, I’m Mohamed Aziz Nasri </span>
          <p>
            A dedicated Software Engineer and Computer Science student based in
            Tunisia. My journey is driven by a passion for innovation and a deep
            curiosity about technology.
            <br />
            <br />
            Currently studying at the Higher Institute of Computer Science of
            Mahdia, I’m on a mission to refine my skills and contribute
            meaningfully to the world of software engineering.
            <br />
            <br />I thrive at the intersection of programming and design,
            blending technical expertise with a keen eye for aesthetics to craft
            applications that are both powerful and user-friendly. My focus is
            on creating solutions that are scalable, efficient, and inclusive,
            ensuring exceptional digital experiences for all.
          </p>
        </div>
        <div className="about-content-two">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div className="links">
            <div className="link" onClick={GithubLink}>
              <FaGithub className="icon" />
              <p>follow me on Github</p>
            </div>
            <div className="link" onClick={LinkedIn}>
              <FaLinkedin className="icon" />
              <p>follow me on LinkedIn</p>
            </div>
            <hr />
            <div className="link" onClick={mailMe}>
              <MdEmail className="icon" />
              <p>aziznasri11082003@gmail.com</p>
            </div>
            
            {/* Newsletter section integrated with links */}
            <hr />
            <div className="newsletter-link">
              <div className="newsletter-header">
                <FiBell className="icon" />
                <p>Stay Updated</p>
              </div>
              <p className="newsletter-description">Get notified about new content</p>
              
              {!isSubscribed ? (
                <form onSubmit={handleNotifySubmit(onNotifySubmit)} className="newsletter-form">
                  <input
                    type="text"
                    placeholder="Name (optional)"
                    {...registerNotify('name')}
                    className="newsletter-input"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    {...registerNotify('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className={`newsletter-input ${notifyErrors.email ? 'error' : ''}`}
                  />
                  <button
                    type="submit"
                    className="newsletter-btn"
                    disabled={notifyLoading}
                  >
                    {notifyLoading ? (
                      <div className="loading-spinner" />
                    ) : (
                      'Subscribe'
                    )}
                  </button>
                  {notifyErrors.email && (
                    <span className="newsletter-error">
                      {notifyErrors.email.message}
                    </span>
                  )}
                </form>
              ) : (
                <div className="newsletter-success">
                  <FiCheck className="success-icon" />
                  <p>Successfully subscribed!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
