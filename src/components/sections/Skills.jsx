import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 75, color: 'bg-blue' },
        { name: 'Vue.js', level: 70, color: 'bg-green-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-yellow-600' },
        { name: 'MYSQL', level: 82, color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 78, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 75, color: 'bg-green-700' },
        { name: 'Express.js', level: 70, color: 'bg-red-600' }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'Docker', level: 75, color: 'bg-blue-600' },
        { name: 'AWS', level: 70, color: 'bg-orange-500' },
        { name: 'Figma', level: 85, color: 'bg-purple-600' },
        { name: 'Jest', level: 80, color: 'bg-red-500' },
        { name: 'Webpack', level: 72, color: 'bg-blue-800' }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out transform group-hover:scale-x-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          transformOrigin: 'left'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills/Badges */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Node.js', 'TypeScript', 'Python', 'JavaScript', 'Tailwind CSS',
              'Next.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
              'Git', 'Figma', 'Jest', 'Redux', 'GraphQL', 'Socket.io'
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills