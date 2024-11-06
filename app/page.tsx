'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Menu, X, Twitter } from 'lucide-react' // Removed Mail import
import { Button } from "@/components/ui/button"
import  Input  from "@/components/ui/input"
import  Textarea  from "@/components/ui/textarea"

const projects = [
  { title: 'AI-Driven Analytics Dashboard', description: 'A real-time analytics platform powered by machine learning algorithms.', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Eco-Friendly Smart Home App', description: 'An IoT application for managing and optimizing home energy consumption.', image: '/placeholder.svg?height=300&width=400' },
  { title: 'Blockchain-Based Supply Chain', description: 'A decentralized system for transparent and secure supply chain management.', image: '/placeholder.svg?height=300&width=400' },
]

const skills = ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Python', 'AWS']

export default function EnhancedPortfolioFooter() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-blue-400"
          >
            Syed Abdullah Zaidi
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`capitalize ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100'}`}
              >
                {section}
              </motion.a>
            ))}
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-gray-100"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-gray-900 pt-16"
        >
          <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-6">
            {['home', 'about', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl capitalize ${activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-gray-100'}`}
              >
                {section}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      {/* Main content */}
      <main className="pt-16">
        {/* Home section */}
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
          <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mb-12 md:mb-0"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-blue-400">Crafting Digital Experiences</h2>
              <p className="text-xl mb-8 text-gray-300">I am a full-stack developer passionate about creating innovative and user-centric web solutions.</p>
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-500 text-white hover:bg-blue-600 text-lg px-8 py-3"
              >
                View My Work <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg"
            >
              <Image
                src="/profile.jpg?height=400&width=400"
                alt="John Doe"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
          <motion.div
            style={{ opacity, scale }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronRight className="w-8 h-8 animate-bounce text-blue-400" />
          </motion.div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-blue-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg mb-6 text-gray-300">
                  With over 5 years of experience in web development, I specialize in creating scalable, 
                  efficient, and visually appealing applications. My expertise spans across the full stack, 
                  from responsive front-end designs to robust back-end architectures.
                </p>
                <p className="text-lg text-gray-300">
                  I am constantly exploring new technologies and methodologies to stay at the forefront 
                  of the ever-evolving tech landscape. My goal is to deliver solutions that not only meet 
                  but exceed client expectations.
                </p>
              </motion.div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700 p-4 rounded-lg text-center"
                  >
                    <p className="text-lg font-semibold text-blue-300">{skill}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-blue-400">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">{project.title}</h3>
                    <p className="mb-6 text-gray-300">{project.description}</p>
                    <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-blue-400">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
                <Textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-500 text-white hover:bg-blue-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Abstract background"
              layout="fill"
              objectFit="cover"
              className="opacity-5"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-400">Syed Abdullah Zaidi</h3>
              <p className="text-gray-400 text-sm">Crafting digital experiences with passion and precision.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Contact</h4>
              <p className="text-gray-400">Email: syedabdullahzaidi@gmail.com</p>
              <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-200">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github className="w-6 h-6" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">© 2024 SAZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
