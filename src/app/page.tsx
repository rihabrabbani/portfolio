'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import SectionHeading from '@/components/SectionHeading';
import StatCard from '@/components/StatCard';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const [floatingElements, setFloatingElements] = useState<any[]>([]);
  const [decorativeLights, setDecorativeLights] = useState<any[]>([]);

  // Generate random positions for floating elements after component mounts (client-side only)
  useEffect(() => {
    const generateFloatingElements = () => {
      if (typeof window !== 'undefined') {
        const elements = Array.from({ length: 15 }, (_, i) => ({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          backgroundColor: i % 3 === 0 ? '#e6a61e20' : i % 3 === 1 ? '#2c403520' : '#f8c05420',
          width: Math.random() * 60 + 20,
          height: Math.random() * 60 + 20,
          duration: Math.random() * 50 + 50,
          targetX: Math.random() * window.innerWidth,
          targetY: Math.random() * window.innerHeight,
        }));
        setFloatingElements(elements);
        
        // Generate decorative lights for achievements section
        const lights = Array.from({ length: 5 }, (_, i) => ({
          id: i,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 300 + 200}px`,
          height: `${Math.random() * 300 + 200}px`,
          duration: Math.random() * 5 + 5,
        }));
        setDecorativeLights(lights);
      }
    };

    generateFloatingElements();
    
    // Handle resize event to recalculate positions
    const handleResize = () => {
      generateFloatingElements();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Project data
  const projects = [
    {
      title: 'NUSTrive - Test Prep Platform',
      subtitle: 'Test Preparation Platform',
      description: 'An entry test preparation platform featuring lecture content and AI-based quizzes to help students prepare effectively.',
      technologies: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'AI'],
      gradient: 'bg-gradient-to-r from-[#2c4035] to-[#1a2d25]',
      link: 'https://nustrive1.vercel.app/',
      linkText: 'Visit Site',
      date: 'March 2025 - Present',
      badgeText: 'Featured',
      badgeColor: 'bg-[#e6a61e]/10 text-[#e6a61e]',
      stats: [
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Type', value: 'Web App' },
        { label: 'Role', value: 'Lead Dev' },
        { label: 'Duration', value: '3 months' }
      ]
    },
    {
      title: 'DiskDoctors - Data Recovery',
      subtitle: 'Data Recovery Service',
      description: 'A full-stack MERN web application for a USA-based company specializing in data storage repair and recovery.',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'REST API'],
      gradient: 'bg-gradient-to-r from-[#e6a61e] to-[#f8c054]',
      link: 'https://disk-doctor.vercel.app/',
      linkText: 'Visit Site',
      date: 'May 2025 - June 2025',
      badgeText: 'Client Work',
      badgeColor: 'bg-[#2c4035]/10 text-[#2c4035]',
      stats: [
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Type', value: 'Commercial' },
        { label: 'Role', value: 'Developer' },
        { label: 'Duration', value: '2 months' }
      ]
    },
    {
      title: 'VidBrief - AI Video Summarizer',
      subtitle: 'AI-Powered Video Summarizer',
      description: 'A MERN stack web application that generates concise AI-powered English summaries from YouTube videos.',
      technologies: ['AI', 'NLP', 'React', 'Node.js', 'MongoDB', 'YouTube API'],
      gradient: 'bg-gradient-to-r from-[#2c4035] to-[#3d5d4e]',
      link: 'https://github.com/rihabrabbani',
      linkText: 'View Code',
      date: 'May 2025 - Present',
      badgeText: 'AI Project',
      badgeColor: 'bg-[#3d5d4e]/10 text-[#3d5d4e]',
      stats: [
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Type', value: 'AI Tool' },
        { label: 'Role', value: 'Developer' },
        { label: 'Duration', value: 'Ongoing' }
      ]
    },
    {
      title: 'Y62 YouTube Video Downloader',
      subtitle: 'YouTube Video Downloader',
      description: 'Responsive YouTube Video Downloader web application built with MERN Stack. Allows users to download YouTube videos.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'YouTube API'],
      gradient: 'bg-gradient-to-r from-[#ff0000] to-[#cc0000]',
      link: 'https://github.com/rihabrabbani',
      linkText: 'View Code',
      date: 'May 2025 - June 2025',
      badgeText: 'Personal Project',
      badgeColor: 'bg-[#ff0000]/10 text-[#cc0000]',
      stats: [
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Type', value: 'Tool' },
        { label: 'Role', value: 'Lead Dev' },
        { label: 'Duration', value: '2 months' }
      ]
    },
    {
      title: 'IntelliHire - AI Job Matching',
      subtitle: 'AI Job Matching Platform',
      description: 'Real-time job portal using WebSockets for instant job alerts and dynamic postings with AI-driven candidate matching.',
      technologies: ['WebSockets', 'React', 'AI', 'PDF Processing', 'Node.js', 'Express'],
      gradient: 'bg-gradient-to-r from-[#e6a61e] to-[#d9880c]',
      link: 'https://github.com/rihabrabbani',
      linkText: 'View Code',
      date: 'Feb 2025 - May 2025',
      badgeText: 'AI Platform',
      badgeColor: 'bg-[#e6a61e]/10 text-[#d9880c]',
      stats: [
        { label: 'Development', value: 'Full-Stack' },
        { label: 'Type', value: 'AI Platform' },
        { label: 'Role', value: 'Lead Dev' },
        { label: 'Duration', value: '3 months' }
      ]
    }
  ];

  // Skills data
  const skills = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'Next.js', icon: 'devicon-nextjs-original' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  ];

  // Stats data
  const stats = [
    { 
      number: '15+', 
      text: 'Completed Projects', 
      icon: 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' 
    },
    { 
      number: '2+', 
      text: 'Years of Experience', 
      icon: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' 
    },
    { 
      number: '3', 
      text: 'AI Projects', 
      icon: 'M10 12a2 2 0 100-4 2 2 0 000 4z M3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z M13.5 9.927c-.08-.09-.189-.139-.3-.139.111 0 .22.049.3.139z M11.41 7.025c0 .24.234.339.306.105 0 0-.51.45-.806 1.276-1.396 3.923 2.263 1.9 2.496 1.704.233-.196.653-.646.653-1.068 0-.601-.721-.35-.911-.15-.19.2-.584.494-.792.098-.207-.395-.207-.551.218-1.001.424-.45.911-.95.911-1.612 0-.662-.65-1.082-1.069-1.082-.42 0-.91.42-.91.905 0 .484.588.527.904.785z M7.684 7.89c.234-.197.653-.646.653-1.069 0-.601-.721-.35-.911-.15-.19.2-.584.494-.792.098-.207-.395-.207-.55.218-1.001.424-.45.911-.95.911-1.612 0-.662-.65-1.082-1.069-1.082-.42 0-.91.42-.91.905 0 .484.588.527.904.785C6.608 4.854 6.5 4.807 6.5 4.757c0 .19.83.339.306.105 0 0-.51.45-.806 1.276-1.396 3.918 2.263 1.894 2.496 1.698z' 
    },
    { 
      number: '5', 
      text: 'MERN Stack Apps', 
      icon: 'M5 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V3zm0 3v10a2 2 0 002 2h10a2 2 0 002-2V6H5zm12 6h-3v3h-2v-3H9v-2h3V7h2v3h3v2z' 
    }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_#f7efe8_10%,_#ffffff_70%)] font-raleway relative overflow-hidden">
      {/* Enhanced Dynamic Background Elements */}
      <motion.div 
        className="fixed top-0 right-0 w-[800px] h-[800px] bg-[#f5e9d9] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"
        style={{ opacity: backgroundOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      ></motion.div>
      <motion.div 
        className="fixed bottom-20 left-0 w-[600px] h-[600px] bg-[#e6f0ed] rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 z-0"
        style={{ opacity: backgroundOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      ></motion.div>
      <motion.div 
        className="fixed top-1/2 left-1/2 w-[300px] h-[300px] bg-[#f8d7a7] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"
        style={{ opacity: backgroundOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      ></motion.div>
      
      {/* Enhanced Floating Elements for Visual Interest - Client-side rendered */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute rounded-full mix-blend-multiply opacity-30"
            style={{
              width: element.width,
              height: element.height,
              backgroundColor: element.backgroundColor,
            }}
            initial={{ 
              x: element.x,
              y: element.y,
              scale: element.scale 
            }}
            animate={{
              x: [null, element.targetX, element.x],
              y: [null, element.targetY, element.y],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
      
      {/* Content container with relative z-index */}
      <div className="relative z-10">
        {/* Navbar Component */}
        <Navbar />

        {/* Hero Section Component */}
        <Hero />

        {/* Project Showcase Section */}
        <div id="projects" className="py-20 relative overflow-hidden">
          {/* Enhanced Beautiful Background for Projects Section */}
          <div className="absolute inset-0 z-0">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f9f8] to-[#f5f7f6]"></div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#e6a61e_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#2c4035]/5 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#e6a61e]/5 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: 2
              }}
            />
            
            {/* Accent lines */}
            <div className="absolute top-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2c4035]/10 to-transparent"></div>
            <div className="absolute bottom-16 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#e6a61e]/20 to-transparent"></div>
            
            {/* Subtle mesh gradient overlay */}
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_transparent,_#e6a61e05),radial-gradient(ellipse_at_bottom,_transparent,_#2c403510)]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
            <SectionHeading 
              title="Featured"
              highlightedWord="Projects"
              description="A showcase of my latest work in web development, featuring modern technologies and responsive designs."
            />

            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  {...project}
                />
              ))}
            </div>

            <div className="text-center mt-16">
              <motion.a 
                href="https://github.com/rihabrabbani" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2c4035] to-[#1e2e26] hover:from-[#e6a61e] hover:to-[#f8c054] transition-all duration-500 text-white px-8 py-3 rounded-full font-poppins font-medium shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills" className="py-20 bg-gradient-to-b from-[#f9f9f9] to-[#f0f0f0] relative overflow-hidden">
          {/* Use CSS grid pattern instead of an image */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[repeating-linear-gradient(45deg,#e6a61e10,#e6a61e10_1px,transparent_1px,transparent_10px)]"></div>
          
          <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
            <SectionHeading 
              title="Technical"
              highlightedWord="Skills"
              description="My expertise spans across various technologies in web development, focusing on the MERN stack."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, index) => (
                <SkillCard 
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="py-20 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
            <SectionHeading 
              title="Education &"
              highlightedWord="Certifications"
              description="My academic background and continuous learning through professional certifications."
            />

            <div className="grid md:grid-cols-2 gap-10">
              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#2c4035]"></div>
                <h3 className="text-xl font-bold text-[#2c4035] mb-2 font-cormorant">Bachelor of Science in Computer Science</h3>
                <p className="text-[#e6a61e] font-medium mb-4">FAST University Islamabad</p>
                <p className="text-gray-600 mb-2">
                  Currently pursuing my degree with coursework in Full-stack development including Data Structures, Database and
                  Software design.
                </p>
                <div className="flex justify-between items-center mt-6">
                  <span className="text-gray-500 text-sm">Aug 2022 - Present</span>
                  <div className="px-4 py-1 bg-[#f5f5f5] rounded-full text-sm font-medium text-[#2c4035]">In Progress</div>
                </div>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold text-[#2c4035] mb-6 font-cormorant">Professional Certifications</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="border-l-2 border-[#e6a61e] pl-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h4 className="font-bold text-gray-800 font-cormorant">The Complete 2024 Web Development Bootcamp</h4>
                    <p className="text-gray-600 text-sm">Udemy (2024)</p>
                  </motion.div>
                  
                  <motion.div 
                    className="border-l-2 border-[#e6a61e] pl-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h4 className="font-bold text-gray-800 font-cormorant">Visual C++ Programming for Desktop Application Development</h4>
                    <p className="text-gray-600 text-sm">Udemy (2024)</p>
                  </motion.div>
                  
                  <motion.div 
                    className="border-l-2 border-[#e6a61e] pl-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h4 className="font-bold text-gray-800 font-cormorant">Build Your Portfolio Website with HTML and CSS</h4>
                    <p className="text-gray-600 text-sm">Coursera (2022)</p>
                  </motion.div>
                  
                  <motion.div 
                    className="border-l-2 border-[#e6a61e] pl-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h4 className="font-bold text-gray-800 font-cormorant">Languages</h4>
                    <p className="text-gray-600">English, Urdu</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div id="achievements" className="bg-gradient-to-r from-[#2c4035] to-[#1e2e26] text-white py-24 mt-20 relative overflow-hidden">
          {/* Use a CSS grid pattern for the background */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(30deg,#ffffff10_1px,transparent_1px),linear-gradient(150deg,#ffffff10_1px,transparent_1px)] bg-[size:25px_25px]"></div>
          
          {/* Decorative lights - Client-side rendered */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {decorativeLights.map((light) => (
              <motion.div
                key={light.id}
                className="absolute rounded-full bg-white/10 blur-xl"
                style={{
                  top: light.top,
                  left: light.left,
                  width: light.width,
                  height: light.height,
                }}
                initial={{ opacity: 0.1 }}
                animate={{ 
                  opacity: [0.1, 0.2, 0.1], 
                  scale: [1, 1.2, 1] 
                }}
                transition={{
                  duration: light.duration,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
            <SectionHeading 
              title="Achievements"
              highlightedWord="& Milestones"
              description="Key statistics and achievements from my development career."
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  number={stat.number}
                  text={stat.text}
                  icon={stat.icon}
                />
              ))}
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="flex justify-center mt-16">
              <motion.a 
                href="https://github.com/rihabrabbani" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden bg-white text-[#2c4035] px-10 py-4 rounded-full shadow-2xl hover:text-white transition-all duration-500 font-poppins font-medium flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="absolute inset-0 bg-[#e6a61e] scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                ></motion.span>
                <span className="relative z-10">View All Projects</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 relative z-10" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </motion.svg>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
