import React from 'react';
import './Services.css';
import { HeartPulse, Stethoscope, Brain, Bone, ActivitySquare, Pill } from 'lucide-react';

const services = [
  { id: 1, title: 'Cardiology', desc: 'Comprehensive heart care and cardiovascular treatments.', icon: <HeartPulse size={32} /> },
  { id: 2, title: 'General Surgery', desc: 'State-of-the-art surgical procedures by expert surgeons.', icon: <Stethoscope size={32} /> },
  { id: 3, title: 'Neurology', desc: 'Advanced diagnostics and treatment for nervous system disorders.', icon: <Brain size={32} /> },
  { id: 4, title: 'Orthopedics', desc: 'Specialized care for bones, joints, and musculoskeletal issues.', icon: <Bone size={32} /> },
  { id: 5, title: 'Diagnostics', desc: 'Accurate and rapid laboratory and imaging services.', icon: <ActivitySquare size={32} /> },
  { id: 6, title: 'Pharmacy', desc: '24/7 in-house pharmacy with authentic medications.', icon: <Pill size={32} /> },
];

const Services = () => {
  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="text-center services-header">
          <h2>Our Excellence Centers</h2>
          <p className="subtitle">We provide a wide range of medical services to cater to your health needs.</p>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {services.map(service => (
            <div key={service.id} className="service-card glass">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <a href="#enquiry" className="service-link">Learn More &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
