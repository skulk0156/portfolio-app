import React from 'react'
import { Code, Coffee, Heart, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code, number: '10+', label: 'Projects Completed' },
    { icon: Coffee, number: '100+', label: 'Cups of Coffee' },
    { icon: Users, number: '10+', label: 'Happy Clients' },
    { icon: Heart, number: '∞', label: 'Lines of Code' }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for clean code and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Building digital experiences that matter
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 1 year of experience 
              creating web applications that combine beautiful design with robust functionality. 
              I love working with modern technologies and am always eager to learn new tools 
              and frameworks.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying a good cup of coffee while planning my 
              next big project. I believe in writing clean, maintainable code and creating 
              user experiences that delight and inspire.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">What I bring to the table:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean, scalable code architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  User-centered design thinking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Agile development practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Continuous learning mindset
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg card-hover"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About