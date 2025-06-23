'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position with improved detection
      const sections = document.querySelectorAll('div[id], main[id]');
      let found = false;
      
      // Check if we're at the bottom of the page for the achievements section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        setActiveLink('#achievements');
        found = true;
      }
      
      // Only continue checking if we haven't found a section yet
      if (!found) {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const sectionHeight = section.getBoundingClientRect().height;
          
          if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
            setActiveLink(`#${section.id}`);
            found = true;
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize on first render
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleLinkClick = (href: string) => {
    // Set active link immediately for responsive feedback
    setActiveLink(href);
    
    // Find the section and scroll to it
    const section = document.querySelector(href);
    if (section) {
      // Close mobile menu first to prevent UI issues
      setIsOpen(false);
      
      // Small delay to allow UI to update before scrolling
      setTimeout(() => {
        // Scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
        
        // Additional approach with offset for fixed header
        const yOffset = -70;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 100);
    } else {
      // If section not found, just close the mobile menu
      setIsOpen(false);
    }
  };
  
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-white/95 shadow-md' : 'bg-white/80'
      } transition-all duration-300`}
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[#e6a61e] via-[#2c4035] to-[#e6a61e]"></div>
      
      <nav className="backdrop-blur-md transition-all duration-500">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e6a61e] to-[#f8c054] flex items-center justify-center text-2xl font-bold shadow-lg">
                <span className="font-abril font-bold text-white">R</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#2c4035] rounded-full opacity-0"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#2c4035] font-abril">
                Rihab<span className="text-[#e6a61e]">.</span>
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-raleway">Full-Stack Developer</span>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded border-[#2c4035]/20 text-[#2c4035] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="bg-white/50 dark:bg-[#1e2722]/50 backdrop-blur-md p-1.5 rounded-full flex items-center shadow-sm">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-4 py-2 text-sm rounded-full transition-all duration-300 font-raleway font-medium ${
                    activeLink === link.href 
                      ? 'bg-gradient-to-r from-[#2c4035] to-[#1e2e26] text-white shadow-md' 
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Contact Button */}
            <button 
              onClick={() => handleLinkClick('#achievements')}
              className="ml-4 bg-gradient-to-r from-[#e6a61e] to-[#f8c054] text-white px-6 py-2.5 rounded-full font-raleway font-medium shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden w-full flex flex-col items-center py-4 bg-white/95 backdrop-blur-md">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`py-3 w-full text-center ${
                  activeLink === link.href ? 'font-medium text-[#e6a61e]' : 'text-[#2c4035]'
                } transition-colors font-raleway`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => handleLinkClick('#achievements')}
              className="mt-4 bg-gradient-to-r from-[#e6a61e] to-[#f8c054] text-white px-6 py-2.5 rounded-full font-raleway font-medium shadow-md transition-all duration-300 flex items-center gap-2"
            >
              <span>Contact Me</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
