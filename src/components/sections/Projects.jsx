import React from 'react'
import ProjectCard from '../ui/ProjectCard'

const Projects = () => {
  // Sample project data - Replace with your actual projects
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js. Features include user authentication, shopping cart, payment processing, and admin dashboard. Responsive design with modern UI/UX.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      image: null, // Replace with actual image URL
      github: 'https://github.com/skulk0156/ecommerce-app',
      live: 'https://ecommerce-app-psi-red.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates. Built with React and Socket.io for real-time collaboration. Features drag-and-drop functionality, team workspaces, and progress tracking.',
      tech: ['HTML', 'CSS', 'Express.js', 'MYSQL', 'Node.js'],
      image: null, // Replace with actual image URL
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://your-taskmanager-demo.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that provides detailed weather information and forecasts. Features location-based weather, interactive maps, and weather alerts. Built with modern web technologies.',
      tech: ['Vue.js', 'TypeScript', 'Weather API', 'Chart.js', 'SCSS'],
      image: null, // Replace with actual image URL
      github: 'https://github.com/yourusername/weather-dashboard',
      live: 'https://your-weather-demo.com'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              github={project.github}
              live={project.live}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <button
            onClick={() => window.open('https://github.com/yourusername', '_blank')}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects