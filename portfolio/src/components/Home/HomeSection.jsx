import React from 'react';

export default function HomeSection() {
  const stats = [
    { value: '5 Y.', label: 'Experience' },
    { value: '15+', label: 'Projects Completed' },
    { value: '15', label: 'Happy Clients' }
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Hello, I'm
                <br />
                <span className="text-gray-900">Nisal Ranasinghe</span>
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                I'm a Freelance <span className="text-purple-600 font-medium">Full Stack Developer</span> based in Sri Lanka. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.
              </p>
            </div>

            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              Say Hello!
            </button>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                alt="Brooklyn Gilbert"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full bg-purple-200 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}