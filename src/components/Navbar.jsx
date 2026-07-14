import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <Activity size={32} color="var(--primary)" />
          <span>Grand Health</span>
        </div>
        
        <div className="navbar-links desktop-only">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#enquiry" className="btn-primary nav-btn">Book Appointment</a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu animate-fade-in">
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#enquiry" onClick={() => setIsOpen(false)} className="btn-primary">Book Appointment</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
