import Typewrite from "./Typewrite";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { emailjsConfig, demoEmailJS, isDemoMode } from '../config/emailjs-demo';
import { FiBell, FiCheck } from "react-icons/fi";
import cv from "../assets/CV_Mohamed_Aziz_Nasri.pdf"

function Home() {
    // Simple animation state
    const [animate, setAnimate] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [notifyLoading, setNotifyLoading] = useState(false);
    
    const { 
        register: registerNotify, 
        handleSubmit: handleNotifySubmit, 
        formState: { errors: notifyErrors },
        reset: resetNotify 
    } = useForm();

    useEffect(() => {
        // Trigger animation after component mounts
        setAnimate(true);
        
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
    
    const LinkedIn = () => {
      window.open("https://www.linkedin.com/in/med-aziz-nasri/", "_blank");
    };
    const GithubLink = () => {
      window.open("https://github.com/medaziznasri", "_blank");
    };
  return (
    <div className="home_container">
      <Toaster position="top-right" />
      
      {/* Enhanced creative top bounce with pulsating wave effect */}
      <div className="top-bounce">
        {[...Array(60)].map((_, index) => (
          <div key={index} className="bounce-dot" style={{animationDelay: `${index * 0.05}s`}}></div>
        ))}
      </div>
      
      <div className="welcome">
        <div className="intro">
          <h1 className="wlcm-intro-h1"
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#85929e",
              marginBottom: "-7px",
            }}
          >
            Hello, My name is
          </h1>
          <p className="my_name">Mohamed Aziz Nasri</p>
          <Typewrite></Typewrite>
        </div>
        <div className="introto">
          <p>
            – a creative haven where ideas flourish and projects come to life.{" "}
            <br /> Dive in to explore my journey, passions, and masterpieces!
          </p>
          <div className="icons">
            <FaLinkedin className="linkedin-icon pulse-icon" onClick={LinkedIn} />
            <FaGithub className="github-icon pulse-icon" onClick={GithubLink} />
            <div className="resume">
              <a href={cv} target="_blank" rel="noreferrer">
                CV
              </a>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Home;
