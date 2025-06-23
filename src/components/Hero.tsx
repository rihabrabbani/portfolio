'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export default function Hero() {
  const socialLinks: SocialLink[] = [
    { name: 'github', url: 'https://github.com/rihabrabbani', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rihab-rabbani-053915223/', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { name: 'email', url: 'mailto:rihabrabbani16@gmail.com', icon: 'M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' },
  ];

  const handleScrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.main
      id="home"
      className="grid md:grid-cols-2 gap-12 px-6 py-24 sm:px-8 md:px-20 md:py-32 max-w-7xl mx-auto relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section - Text Content */}
      <div className="flex flex-col justify-center">
        {/* Hello There Box */}
        <div className="relative w-max mb-8 group">
          <div className="border border-gray-300 py-1.5 px-5 bg-white/80 backdrop-blur-sm shadow-sm rounded-md">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#e6a61e]"></div>
              <p className="text-gray-700 font-raleway font-medium tracking-wide">Hello There!</p>
            </div>
          </div>
          
          {/* Corner Elements */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#e6a61e]"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#e6a61e]"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#e6a61e]"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#e6a61e]"></div>
        </div>

        {/* Name and Role */}
        <div className="mb-10 relative">
          <h1 className="text-5xl md:text-6xl font-bold font-abril leading-tight main-heading">
            I'm <span className="relative">
              <span className="text-[#2c4035] bg-gradient-to-r from-[#e6a61e] to-[#e6a61e] bg-[length:100%_6px] bg-bottom bg-no-repeat pb-2">
                Rihab Rabbani
              </span>
              <span className="absolute -right-13 bottom-5 text-[#e6a61e]">✦</span>
            </span>,
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 font-cormorant">
            Full-Stack Developer
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 font-cormorant flex items-center">
            Based in <span className="relative inline-flex items-center mx-2">
              Pakistan
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#2c4035]/30"></span>
            </span>
            <span className="ml-2 mt-1 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#e6a61e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </h3>
          
          {/* Decorative element */}
          <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="h-[100px] w-1 bg-gradient-to-b from-[#e6a61e] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10 bg-white/50 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#e6a61e]"></div>
          <p className="text-gray-700 max-w-md text-lg leading-relaxed font-raleway pl-3">
            I'm a Full-Stack Developer with <span className="text-[#2c4035] font-semibold">2 years</span> of experience, currently pursuing a Computer Science degree 
            at FAST University Islamabad. Skilled in building responsive web applications using modern frameworks and technologies.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4 mb-10">
          {socialLinks.map((social, index) => (
            <a 
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label={social.name}
            >
              <div className="w-12 h-12 rounded-lg border border-gray-200 flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.icon} />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row">
          <button 
            onClick={handleScrollToProjects}
            className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#2c4035] to-[#1a2d25] text-white px-8 py-4 rounded-full shadow-lg relative overflow-hidden"
          >
            <span className="font-poppins font-medium">View My Projects</span>
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[#2c4035]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
          
          <div className="border border-gray-300 px-8 py-4 rounded-full font-poppins font-medium overflow-hidden">
            <a 
              href="mailto:rihabrabbani16@gmail.com" 
              className="flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2c4035]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Hire Me
            </a>
          </div>
        </div>
        
        {/* Current availability status */}
        <div className="mt-8 flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600 font-poppins">Available for new projects</span>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="relative flex items-center justify-center">
        {/* Circle Background */}
        <div className="absolute w-[95%] h-[95%] rounded-full bg-gradient-to-br from-[#ffb81e] to-[#e6a61e] z-0"></div>
        <div className="absolute w-[95%] h-[95%] rounded-full z-1 opacity-20 bg-[url('/pattern.png')]"></div>
        
        {/* Patterned border */}
        <div className="absolute w-[92%] h-[92%] rounded-full border-2 border-dashed border-white/30 z-1"></div>
        
        {/* Professional Image */}
        <div className="relative z-10 shadow-2xl rounded-3xl overflow-hidden">
          {/* Image Frame */}
          <div className="p-1.5 bg-white rounded-3xl shadow-inner">
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/me.png"
                alt="Rihab Rabbani - Full Stack Developer"
                width={520}
                height={600}
                className="object-cover object-top h-[600px]"
                priority
              />
              
              {/* Professional Tags */}
              <div className="absolute -bottom-4 -left-10 bg-white/10 backdrop-blur-lg text-white px-6 py-3 rounded-xl shadow-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#e6a61e] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-poppins font-medium">Full-Stack Developer</span>
                    <div className="text-xs opacity-70">MERN Stack Specialist</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -right-8 bg-white backdrop-blur-lg text-[#2c4035] px-6 py-3 rounded-xl shadow-lg border border-[#e6a61e]/20">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2c4035] flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-poppins font-medium">Web Developer</span>
                    <div className="text-xs opacity-70">React & Node.js Expert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Circular Tag */}
          <div className="absolute -right-6 top-1/3 w-32 h-32 rounded-full bg-gradient-to-br from-[#2c4035]/95 to-[#1a2d25]/95 backdrop-blur-md flex items-center justify-center text-white border-4 border-white/20 shadow-xl">
            <div className="text-center relative">
              <div className="text-sm font-poppins font-semibold tracking-wider">HIRE ME</div>
              <div className="text-xl mt-1 transform -rotate-12">✈</div>
              <div className="text-xs font-poppins">HERE</div>
              {/* Orbit effect */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                <div className="w-full h-full rounded-full border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Experience badge */}
        <div className="absolute -bottom-4 right-10 bg-white shadow-xl px-5 py-3 rounded-full z-20 border-2 border-[#e6a61e]">
          <div className="flex items-center gap-3">
            <span className="text-[#2c4035] font-bold text-2xl font-poppins">2+</span>
            <span className="text-gray-700 text-sm font-poppins">Years<br/>Experience</span>
          </div>
        </div>
        
        {/* Tech stack cloud */}
        <div className="absolute -bottom-20 left-0 right-0 mx-auto w-4/5 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 hidden md:block">
          <p className="text-center text-xs text-gray-500 mb-3 font-poppins">Technologies I work with</p>
          <div className="flex justify-between items-center opacity-70">
            {['React', 'Node.js', 'MongoDB', 'Next.js', 'Express'].map((tech, i) => (
              <div key={i} className="text-gray-800 font-bold text-sm font-poppins">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.main>
  );
}