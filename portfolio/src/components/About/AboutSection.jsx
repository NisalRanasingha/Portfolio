import React from 'react';
import { Facebook, Dribbble, Instagram, Linkedin } from 'lucide-react';
import profileImage from "../../assets/profileImage.jpg";

// Add keyframe animation for the download icon
const iconAnimation = `
  @keyframes moveUpDown {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }
`;

export default function AboutSection() {
    const socialLinks = [
        { icon: Facebook, color: 'text-[#32373D]', href: '#' },
        { icon: Dribbble, color: 'text-[#32373D]', href: '#' },
        { icon: Instagram, color: 'text-[#32373D]', href: '#' },
        { icon: Linkedin, color: 'text-[#32373D]', href: '#' }
    ];

    return (
        <section id="about" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image with Social Links */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={profileImage}
                                        alt="Professional Portrait"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                {/* Social Links Card */}
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-xl px-8 py-4 flex items-center space-x-6">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                className={`${social.color} hover:scale-110 transition-transform duration-200`}
                                            >
                                                <Icon size={24} />
                                            </a>
                                        );
                                    })}
                                    <a
                                        href="#"
                                        className="text-[#32373D] hover:scale-110 transition-transform duration-200"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M22 8.608v8.142a3.25 3.25 0 0 1-3.25 3.25H5.25A3.25 3.25 0 0 1 2 16.75V8.608l9.652 5.056a.75.75 0 0 0 .696 0L22 8.608Z" />
                                            <path d="M22 6.75v.858l-9.652 5.056a.75.75 0 0 1-.696 0L2 7.608V6.75a3.25 3.25 0 0 1 3.25-3.25h13.5A3.25 3.25 0 0 1 22 6.75Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                I am Professional Full Stack Developer
                            </h2>

                            <div className="space-y-4 text-gray-600 text-lg">
                                <p>
                                    I design and develop complete web solutions from front-end interfaces to robust back-end systems. I specialize in building modern, responsive, and high-performance web applications that deliver exceptional user experiences.
                                </p>
                                <p>
                                    My passion lies in creating seamless digital products — from crafting intuitive UIs to developing efficient server-side architectures and databases.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button
                                    onClick={() => {
                                        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className=" text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1D1E21] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"style={{ backgroundColor: "#32373D" }}
                                >
                                    My Projects
                                </button>
                                <button className="px-8 py-3 rounded-lg font-medium border-2 border-gray-300 hover:border-[#32373D] transition-all duration-300 flex items-center space-x-2 group cursor-pointer">
                                    <style>{iconAnimation}</style>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-gray-600 group-hover:text-[#32373D] transition-colors duration-300"
                                        style={{
                                            animation: 'moveUpDown 1.5s ease-in-out infinite',
                                        }}
                                    >
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                    <span className="text-gray-600 group-hover:text-[#32373D] transition-colors duration-300">Download CV</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}