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

        {/* CTA removed as requested */}
      </div>
    </section>
  )
}

export default Projects