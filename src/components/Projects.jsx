export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product listings, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/600x400?text=E-commerce",
      link: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity application for organizing tasks with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://via.placeholder.com/600x400?text=Task+App",
      link: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather information with 5-day forecasts and location search.",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://via.placeholder.com/600x400?text=Weather",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}