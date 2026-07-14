import React from 'react';
import './About.css';
import { Award, Users, Heart, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid grid grid-cols-2 gap-6 items-center">
          <div className="about-image-wrapper animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Medical team reviewing results" 
              className="about-image"
            />
            <div className="experience-badge glass">
              <span className="years">25+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="about-title">Why Choose Grand Health?</h2>
            <p className="about-desc">
              For over two decades, Grand Health Medical Center has been at the forefront of medical innovation and compassionate care. Our multidisciplinary team of experts works tirelessly to provide you with the best possible health outcomes in a safe, state-of-the-art environment.
            </p>
            
            <div className="features-grid grid grid-cols-2 gap-2">
              <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <h4>Award Winning Care</h4>
                <p>Recognized globally for clinical excellence.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Users size={24} /></div>
                <h4>Expert Doctors</h4>
                <p>Top specialists across all medical fields.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Heart size={24} /></div>
                <h4>Patient First</h4>
                <p>Your comfort and health are our priority.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Shield size={24} /></div>
                <h4>Advanced Tech</h4>
                <p>Utilizing the latest in medical technology.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
