import React, { useState } from 'react';
import { Mail, Phone, Send, Facebook, Dribbble, Instagram, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // 🔥 REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
  const EMAILJS_SERVICE_ID = 'service_qv7j7vd';      // e.g., 'service_abc123'
  const EMAILJS_TEMPLATE_ID = 'template_go2ljpa';    // e.g., 'template_xyz789'
  const EMAILJS_PUBLIC_KEY = '6gMxgFi-uw69qEzQ8';      // e.g., 'abcXYZ123...'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.location || 
        !formData.subject || !formData.message) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields.' 
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please enter a valid email address.' 
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Template parameters matching your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'sachindunisal09@gmail.com',  // Your email
        location: formData.location,
        subject: formData.subject,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);

      setSubmitStatus({ 
        type: 'success', 
        message: '✓ Message sent successfully! I\'ll get back to you soon.' 
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        location: '',
        subject: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      let errorMessage = 'Failed to send message. ';
      
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please check your EmailJS configuration.';
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage + ' You can email me directly at sachindunisal09@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'My Email:',
      value: 'sachindunisal09@gmail.com',
      href: 'mailto:sachindunisal09@gmail.com',
      bgColor: 'bg-gray-100',
      iconColor: 'text-[#32373D]'
    },
    {
      icon: Phone,
      label: 'Call Me Now:',
      value: '071-774-9219',
      href: 'tel:0717749219',
      bgColor: 'bg-gray-100',
      iconColor: 'text-[#32373D]'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1Bj5mEv4WD/?mibextid=wwXIfr' },
    { icon: Dribbble, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nisal-ranasinghe' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Let's discuss your Project
                </h2>
                <p className="text-gray-500 text-lg">
                  I'm available for freelance work. Drop me a line if you have a project you think I'd be a good fit for.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start space-x-4 group"
                    >
                      <div className={`${info.bgColor} p-3 rounded-lg group-hover:bg-gray-200 transition-colors`}>
                        <Icon className={`${info.iconColor} w-6 h-6`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        <p className="text-gray-900 font-semibold group-hover:text-[#32373D] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="text-[#32373D] hover:text-[#1D1E21] transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
                <a
                  href="mailto:sachindunisal09@gmail.com"
                  className="text-[#32373D] hover:text-[#313336] transition-colors duration-200"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608Z"/>
                    <path d="M22 6.75v.858l-9.652 5.056a.75.75 0 0 1-.696 0L2 7.608V6.75a3.25 3.25 0 0 1 3.25-3.25h13.5A3.25 3.25 0 0 1 22 6.75Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <p className="text-gray-500 mb-6">
                I'm always open to discussing product design work or partnership opportunities.
              </p>
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#1D1E21] outline-none transition-colors duration-200 placeholder-gray-400 disabled:opacity-50"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#1D1E21] outline-none transition-colors duration-200 placeholder-gray-400 disabled:opacity-50"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#1D1E21] outline-none transition-colors duration-200 placeholder-gray-400 disabled:opacity-50"
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#1D1E21] outline-none transition-colors duration-200 placeholder-gray-400 disabled:opacity-50"
                />

                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-[#1D1E21] outline-none transition-colors duration-200 placeholder-gray-400 resize-none disabled:opacity-50"
                />

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="bg-[#32373D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1D1E21] transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
                  <Send size={18} className={isSubmitting ? 'animate-pulse' : ''} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}