'use client';

import Image from 'next/image';

interface ProjectStat {
  label: string;
  value: string;
}

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  gradient: string;
  link: string;
  linkText: string;
  date: string;
  badgeText: string;
  badgeColor: string;
  stats: ProjectStat[];
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  gradient,
  link,
  linkText,
  date,
  badgeText,
  badgeColor,
  stats
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        {/* Project Image/Gradient */}
        <div className={`absolute inset-0 ${gradient} flex items-center justify-center text-white`}>
          <div className="p-6 text-center">
            <div className="text-white text-5xl mb-4 font-bold font-abril">{title.split(' ')[0]}</div>
            <p className="text-white/90 font-raleway">{subtitle}</p>
          </div>
        </div>
        
        {/* Project overlay with quick stats - now properly hidden until hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/10 backdrop-blur-md p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-2 text-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-white/80 text-xs font-raleway">{stat.label}</span>
                  <span className="text-white font-medium font-raleway">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[#2c4035] font-cormorant">{title}</h3>
          <div className={`${badgeColor} text-xs font-medium px-2.5 py-0.5 rounded-full font-raleway`}>
            {badgeText}
          </div>
        </div>
        <p className="text-gray-600 mb-4 font-raleway">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-[#f5f5f5] text-[#2c4035] px-3 py-1 rounded-full text-xs font-medium font-raleway"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e6a61e] font-medium flex items-center gap-1 font-raleway hover:text-[#2c4035] transition-colors"
          >
            <span>{linkText}</span>
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <span className="text-gray-400 text-sm font-raleway">{date}</span>
        </div>
      </div>
    </div>
  );
}