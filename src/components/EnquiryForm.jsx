import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    message: ''
  });
  
  const [csrfToken, setCsrfToken] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock fetching a CSRF token on mount
  useEffect(() => {
    // In a real app, this would be an HTTP Only cookie or fetched from an API
    setCsrfToken(Math.random().toString(36).substring(2, 15));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Sanitize input as it's typed (defense in depth)
    const sanitizedValue = DOMPurify.sanitize(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || formData.name.length < 2) {
      return 'Please enter a valid name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      return 'Please enter a valid phone number.';
    }
    if (!formData.department) {
      return 'Please select a department.';
    }
    return null; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    
    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call with sanitization check
    setTimeout(() => {
      // In a real app, we would send csrfToken along with formData
      console.log('Submitted with CSRF:', csrfToken);
      
      // Simulate rendering some user input back to the screen securely
      const cleanName = DOMPurify.sanitize(formData.name);
      
      setStatus({
        type: 'success',
        message: `Thank you, ${cleanName}. Your enquiry has been securely submitted. Our team will contact you shortly.`
      });
      
      setFormData({ name: '', email: '', phone: '', department: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="enquiry" className="section-padding form-section">
      <div className="container form-container">
        <div className="form-content glass">
          <div className="form-header text-center">
            <h2>Book an Appointment</h2>
            <p>Fill out the secure form below and we will get back to you promptly.</p>
          </div>

          {status.message && (
            <div className={`status-message ${status.type} animate-fade-in`}>
              {/* Safely rendering HTML if needed, though here we just render string */}
              <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(status.message) }}></span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="enquiry-form">
            <input type="hidden" name="csrf_token" value={csrfToken} />
            
            <div className="form-group grid grid-cols-2 gap-2">
              <div className="input-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  maxLength={50}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-group grid grid-cols-2 gap-2">
              <div className="input-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+1 234 567 8900"
                />
              </div>
              <div className="input-group">
                <label htmlFor="department">Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="general">General Checkup</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Additional Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any specific symptoms or questions?"
                maxLength={500}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-primary submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting securely...' : 'Submit Enquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
