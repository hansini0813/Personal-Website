import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import "./footer.css"; // Assuming you're using a CSS file now
import styled from 'styled-components';

const SocialLinks = () => {
  const socialLinksRef = useRef(null);

  const [links] = useState([
    { name: 'GitHub', url: 'https://github.com/hansini0813', icon: faGithub, text: 'hansini0813' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hansini-mirchandani/', icon: faLinkedin, text: '/in/hansini' },
    { name: 'Discord', url: 'https://discord.com/', icon: faDiscord, text: 'jammedpancakes' },
    { name: 'Email', url: "mailto:mirchandanhansini@gmail.com", icon: faEnvelope, text: '1mirchandanihansini@gmail.com' }
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const copyToClipboard = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const glassCard = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '2em',
    padding: '1em 2.5em',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
  };
  
  const styles = {
    container: {
      ...glassCard,
      display: 'flex',
      gap: '1rem',
      zIndex: 1000,
      position: 'absolute',
    },
  };

  return (
    <div 
      ref={socialLinksRef}
      style={{ opacity: isLoaded ? 1 : 0 }}
      className="social-links-container" 
    >
      {links.map((link, index) => (
        <motion.div 
          key={index}
          className="social-link-item" 
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.1 }}
        >
          <div className= "link-container">
            <a
              href={link.url}
              onClick={(e) => {
                if (link.name === "Email") {
                  copyToClipboard(link.url);
                }
              }}
            >
              <FontAwesomeIcon icon={link.icon} className="icon" /> 
            </a>
            <div className="link-text">{link.text}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
  
};

export default SocialLinks;
