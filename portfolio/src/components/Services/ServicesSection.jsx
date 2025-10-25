import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      title: 'User Experience (UX)',
      description: 'I design intuitive and enjoyable experiences by understanding user needs, conducting research, and creating wireframes and prototypes that enhance usability.'
    },
    {
      title: 'User Interface (UI)',
      description: 'I craft visually appealing and consistent interfaces, focusing on layout, color, and typography to ensure a seamless and engaging user journey.'
    },
    {
      title: 'Web Development',
      description: 'I build responsive and high-performance web applications using modern technologies, ensuring accessibility, scalability, and maintainability.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Title and Description */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                What I do?
              </h2>
              <div className="space-y-4 text-gray-500 text-lg">
                <p>
                  I specialize in designing user experiences, crafting engaging interfaces, and building robust web applications that deliver value and usability.
                </p>
                <p>
                  My approach combines creativity and technical expertise to deliver solutions that are both visually appealing and highly functional for users.
                </p>
              </div>
            </div>

            <button 
              onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#32373D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1D1E21] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Say Hello!
            </button>
          </div>

          {/* Right Side - Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}