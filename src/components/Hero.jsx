import React from 'react';
import './Hero.css';
import { ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="badge glass">
            <ShieldCheck size={16} className="badge-icon" />
            <span>Trusted Healthcare Excellence</span>
          </div>
          <h1 className="hero-title">
            Your Health Is Our <span className="highlight">Top Priority</span>
          </h1>
          <p className="hero-subtitle">
            Experience world-class medical care with state-of-the-art facilities and compassionate specialists dedicated to your well-being.
          </p>
          <div className="hero-actions">
            <a href="#enquiry" className="btn-primary flex items-center gap-1">
              Book Appointment <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              Our Services
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item glass">
              <Users size={24} color="var(--primary)" />
              <div className="stat-text">
                <strong>50+</strong>
                <span>Specialists</span>
              </div>
            </div>
            <div className="stat-item glass">
              <Clock size={24} color="var(--primary)" />
              <div className="stat-text">
                <strong>24/7</strong>
                <span>Emergency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
