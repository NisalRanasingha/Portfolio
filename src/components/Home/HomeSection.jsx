import React, { useState, useEffect } from 'react';
import profileImage from "../../assets/profileImage.jpg";

export default function HomeSection() {
  const [firstLine, setFirstLine] = useState('');
  const [secondLine, setSecondLine] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const lines = ["Hello, I'm", "Nisal Ranasinghe"];

  useEffect(() => {
    if (currentLine >= lines.length) {
      setShowCursor(false);
      return;
    }

    let currentIndex = 0;
    const currentText = lines[currentLine];
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        const typedText = currentText.slice(0, currentIndex);
        if (currentLine === 0) {
          setFirstLine(typedText);
        } else {
          setSecondLine(typedText);
        }
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setCurrentLine(currentLine + 1);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  const stats = [
    { value: '2 Y.', label: 'Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '15', label: 'Happy Clients' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                <span className="block">
                  {firstLine}
                  {showCursor && currentLine === 0 && <span className="animate-pulse">|</span>}
                </span>
                <span className="block">
                  {secondLine}
                  {showCursor && currentLine === 1 && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a Freelance <span className="text-[#32373D] font-medium">Full Stack Developer</span> based in Sri Lanka. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
              </p>
            </div>

            <button className="text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:bg-[#1D1E21]" style={{ backgroundColor: "#32373D" }} >
              Contact Me
            </button>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#4d545d] backdrop-blur-sm rounded-lg p-6 text-center shadow-sm cursor-pointer "
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-full shadow-2xl overflow-hidden w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              <img
                src={profileImage}
                alt="Nisal Ranasinghe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}