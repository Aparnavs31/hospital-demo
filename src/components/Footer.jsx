import React from 'react';
import { Activity, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <Activity size={28} color="white" />
            <span>Grand Health</span>
          </div>
          <p className="footer-desc">
            Providing premium healthcare services with a focus on compassion, innovation, and excellence.
          </p>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#enquiry">Book Appointment</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><Phone size={18} /> +1 (800) 123-4567</li>
            <li><Mail size={18} /> contact@grandhealth.com</li>
            <li><MapPin size={18} /> 123 Health Ave, Medical District, NY 10001</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Grand Health Medical Center. All rights reserved. Secure Site.</p>
      </div>
    </footer>
  );
};

export default Footer;
