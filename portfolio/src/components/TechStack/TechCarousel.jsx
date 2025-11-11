import React, { useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

export default function TechCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    let rafId = 0;
    const speed = 0.6;

    const step = () => {
      sc.scrollLeft += speed;
      if (sc.scrollLeft >= sc.scrollWidth / 2) {
        sc.scrollLeft -= sc.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const technologies = [
    { name: 'React', icon: '⚛️', iconSrc: null },
    { name: 'Spring Boot', icon: '🍃', iconSrc: null },
    { name: 'HTML5', icon: '📄', iconSrc: null },
    { name: 'CSS3', icon: '🎨', iconSrc: null },
    { name: 'JavaScript', icon: '📜', iconSrc: null },
    { name: 'TypeScript', icon: '📘', iconSrc: null },
    { name: 'Node.js', icon: '🟢', iconSrc: null },
    { name: 'MongoDB', icon: '🍃', iconSrc: null },
    { name: 'PostgreSQL', icon: '🐘', iconSrc: null },
    { name: 'Docker', icon: '🐳', iconSrc: null },
    { name: 'AWS', icon: '☁️', iconSrc: null },
    { name: 'Git', icon: '🔧', iconSrc: null },
  ];

  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section id="tech" className="pt-6 pb-3 px-6 bg-gray-50">
      <div className="text-center mb-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Code className="w-8 h-8 text-gray-800" />
          <h1 className="text-3xl font-semibold text-gray-800">
            Technology Stack
          </h1>
        </div>
        <p className="text-base text-gray-600">
          I've worked with a range of frontend and backend technologies.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden py-3"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              {tech.iconSrc ? (
                <img src={tech.iconSrc} alt={`${tech.name} logo`} className="h-12 w-12 mb-2 object-contain" />
              ) : (
                <div className="text-4xl mb-1">{tech.icon}</div>
              )}

              <h3 className="text-lg font-medium text-gray-800 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-1 flex gap-4 items-center justify-center">
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse delay-150"></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse delay-300"></div>
        </div>
      </div>
    </section>
  );
}