import React from 'react'
import { ChevronDown, Download } from 'lucide-react'
import Button from '../ui/Button'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            SK
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          Hi, I'm <span className="gradient-text">Shubham Kulkarni</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Full Stack Developer passionate about creating
          <br />
          <span className="gradient-text font-semibold">amazing web experiences</span>
        </p>

        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
          I specialize in modern web technologies and love turning ideas into beautiful, 
          functional applications. Let's build something incredible together!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce-slow text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero