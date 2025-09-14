import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import Button from '../ui/Button'

const ProjectCard = ({ 
  title, 
  description, 
  tech = [], 
  image, 
  github, 
  live,
  className = '' 
}) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover ${className}`}>
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-lg font-semibold">{title}</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {techItem}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {github && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(github, '_blank')}
              className="flex-1"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
          
          {live && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(live, '_blank')}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard