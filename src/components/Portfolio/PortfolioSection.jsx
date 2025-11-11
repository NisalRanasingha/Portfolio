import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Visual impressive aesthetics. Present the content as intuitively as possible for the user's convenience and efficiency.",
      image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=600&h=400&fit=crop",
      bgColor: "from-pink-100 to-orange-100"
    },
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Designed an effective dashboard for product management, incorporating visuals and user efficiency.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      bgColor: "from-slate-800 to-slate-900"
    },
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Developed a modern admin panel with a focus on user experience, dashboard navigation for end users and so on.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      bgColor: "from-slate-100 to-slate-200"
    },
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Created a specialized dashboard for the interior office. Provides functionality for the user and so on.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      bgColor: "from-amber-100 to-amber-50"
    },
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Implemented interactive design and analysis to increase audience comprehension and so on.",
      image: "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=600&h=400&fit=crop",
      bgColor: "from-green-300 to-green-200"
    },
    {
      category: "UI/UX DESIGN",
      title: "Product Admin Dashboard",
      description: "Enhanced user experience by implementing intuitive design and comprehensive navigation and so on.",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
      bgColor: "from-purple-200 to-blue-200"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className={`h-52 bg-gradient-to-br ${project.bgColor} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <p className="text-sm font-semibold text-[#32373D] tracking-wide">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <button className="flex items-center whitespace-nowrap space-x-2 text-gray-900 font-semibold group border border-transparent hover:border-[#1D1E21] hover:text-[#1D1E21] rounded-lg px-4 py-2 transition-all duration-300 min-w-[120px] hover:min-w-[130px]">
                  <span>Case Study</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Project Button */}
        <div className="text-center">
          <button className="bg-[#32373D] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#1D1E21] transition-colors duration-200 shadow-lg hover:shadow-xl cursor-pointer">
            More Project
          </button>
        </div>
      </div>
    </section>
  );
}