import React, { useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

export default function TechCarousel() {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const sc = scrollRef.current;
    if (!sc) return;

    let rafId = null;
    const speed = 0.6;

    const step = () => {
      if (!sc) return;
      
      sc.scrollLeft += speed;
      
      // Reset scroll position for infinite loop
      if (sc.scrollLeft >= sc.scrollWidth / 2) {
        sc.scrollLeft = 0;
      }
      
      rafId = requestAnimationFrame(step);
    };

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(step);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const technologies = [
    { 
      name: 'React', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' 
    },
    { 
      name: 'Spring Boot', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' 
    },
    { 
      name: 'HTML5', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' 
    },
    { 
      name: 'CSS3', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' 
    },
    { 
      name: 'JavaScript', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'TypeScript', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' 
    },
    { 
      name: 'Node.js', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' 
    },
    { 
      name: 'MongoDB', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' 
    },
    { 
      name: 'PostgreSQL', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' 
    },
    { 
      name: 'Docker', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' 
    },
    { 
      name: 'AWS', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' 
    },
    { 
      name: 'Git', 
      iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' 
    },
  ];

  // Triple duplication for smoother infinite scroll
  const duplicatedTechs = [...technologies, ...technologies, ...technologies];

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
          style={{ 
            scrollBehavior: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {duplicatedTechs.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 w-48 h-28 bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={tech.iconSrc} 
                alt={`${tech.name} logo`} 
                className="h-12 w-12 mb-2 object-contain" 
              />
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
          <div className="w-3 h-3 bg-gray-300 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </section>
  );
}