import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  const navLinks = ['Home', 'About', 'Process', 'Project', 'Services'];

  // Listen for scroll to top event
  useEffect(() => {
    const handleUpdateActiveLink = (event) => {
      setActiveLink(event.detail);
    };

    // Create intersection observer
    // Function to determine which section is most in view
    const determineActiveSection = () => {
      // Don't update if user manually clicked a link
      if (isManualScroll) return;

      const sections = ['home', 'about', 'process', 'project', 'services', 'contact'];
      let maxVisibleSection = null;
      let maxVisibility = 0;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const visibilityRatio = visibleHeight / Math.min(section.offsetHeight, windowHeight);
          
          if (visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            maxVisibleSection = sectionId;
          }
        }
      });

      if (maxVisibleSection) {
        const capitalizedSection = maxVisibleSection.charAt(0).toUpperCase() + maxVisibleSection.slice(1);
        setActiveLink(capitalizedSection);
      }
    };

    // Create intersection observer for triggering visibility calculations
    const observer = new IntersectionObserver(
      (entries) => {
        // When any section intersects, recalculate the most visible section
        if (entries.some(entry => entry.isIntersecting)) {
          determineActiveSection();
        }
      },
      {
        root: null,
        rootMargin: "-10% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    // Add scroll event listener for more precise updates
    const handleScroll = () => {
      requestAnimationFrame(determineActiveSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Observe all sections
    const sections = ['home', 'about', 'process', 'project', 'services', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener('updateActiveLink', handleUpdateActiveLink);
    
    // Clean up
    return () => {
      const sections = ['home', 'about', 'process', 'project', 'services', 'contact'];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('updateActiveLink', handleUpdateActiveLink);
    };
  }, [isManualScroll]);

  const scrollToSection = (sectionId) => {
    setActiveLink(sectionId);
    setIsMobileMenuOpen(false);
    setIsManualScroll(true);
    
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable automatic active link detection after scroll completes
      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#32373D] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Nisal Ranasinghe</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`nav-link px-6 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
                  activeLink === link
                    ? 'bg-[#32373D] text-white active-link'
                    : 'text-[#32373D] hover:text-[#32373D]'
                }`}
              >
                {link}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('Contact')}
              className="nav-link contact ml-4 px-6 py-2 bg-[#32373D] text-white rounded-lg font-medium hover:bg-[#1D1E21] transition-all duration-200 cursor-pointer">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`nav-link px-4 py-3 rounded-lg font-medium transition-all duration-200 text-left ${
                    activeLink === link
                      ? 'bg-[#32373D] text-white'
                      : 'text-[#32373D] hover:bg-gray-100'
                  }`}
                >
                  {link}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('Contact')}
                className="nav-link contact px-4 py-3 bg-[#32373D] text-white rounded-lg font-medium hover:bg-[#1D1E21] transition-all duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}