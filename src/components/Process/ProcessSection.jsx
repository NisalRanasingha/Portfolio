import React from 'react';

export default function ProcessSection() {
  const processes = [
    {
      title: "Research & Analysis",
      description: "Deep research into your needs and market analysis",
      icon: "🔍"
    },
    {
      title: "Design & Planning",
      description: "Creating wireframes and design concepts",
      icon: "✏️"
    },
    {
      title: "Development",
      description: "Bringing designs to life with clean code",
      icon: "💻"
    },
    {
      title: "Testing & Launch",
      description: "Quality assurance and successful deployment",
      icon: "🚀"
    }
  ];

  return (
    <section id="process" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
          <p className="text-lg text-gray-600">How I bring ideas to life</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{process.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}