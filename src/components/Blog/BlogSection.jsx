import React from 'react';

export default function BlogSection() {
  const posts = [
    {
      title: "The Future of Web Development",
      date: "Oct 20, 2025",
      category: "Development",
      excerpt: "Exploring upcoming trends in web development and what they mean for developers.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Mastering UI/UX Design",
      date: "Oct 15, 2025",
      category: "Design",
      excerpt: "Essential principles for creating user-friendly interfaces that engage and delight.",
      image: "https://via.placeholder.com/400x250"
    },
    {
      title: "Optimizing Website Performance",
      date: "Oct 10, 2025",
      category: "Performance",
      excerpt: "Tips and tricks for improving your website's speed and performance.",
      image: "https://via.placeholder.com/400x250"
    }
  ];

  return (
    <section id="blog" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Blog</h2>
          <p className="text-lg text-gray-600">Latest insights and articles</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-purple-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-purple-600 font-medium hover:text-purple-700">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}