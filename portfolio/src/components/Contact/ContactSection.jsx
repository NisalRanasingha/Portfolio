import React, { useState } from 'react';
import { Mail, Phone, Send, Facebook, Dribbble, Instagram, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent! Thank you for reaching out.');
    setFormData({
      name: '',
      email: '',
      location: '',
      budget: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'My Email:',
      value: 'sachindunisal09@gmail.com',
      bgColor: 'bg-gray-100',
      iconColor: 'text-[#32373D]'
    },
    {
      icon: Phone,
      label: 'Call Me Now:',
      value: '071-774-9219',
      bgColor: 'bg-gray-100',
      iconColor: 'text-[#32373D]'
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Dribbble, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Linkedin, href: '#' }
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
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`${info.bgColor} p-3 rounded-lg`}>
                        <Icon className={`${info.iconColor} w-6 h-6`} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">{info.label}</p>
                        <p className="text-gray-900 font-semibold">{info.value}</p>
                      </div>
                    </div>
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
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
                <a
                  href="#"
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
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400"
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location*"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400"
                />

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="budget"
                    placeholder="Budget*"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-purple-600 outline-none transition-colors duration-200 placeholder-gray-400 resize-none"
                />

                <button
                  onClick={handleSubmit}
                  className="bg-[#32373D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1D1E21] transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2 cursor-pointer"
                >
                  <span>Submit</span>
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}