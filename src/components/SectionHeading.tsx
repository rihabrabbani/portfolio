'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  highlightedWord: string;
  description: string;
}

export default function SectionHeading({
  title,
  highlightedWord,
  description
}: SectionHeadingProps) {
  return (
    <motion.div 
      className="text-center mb-16 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative element */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[100px] h-[2px] bg-gradient-to-r from-transparent via-[#e6a61e] to-transparent"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 100, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      ></motion.div>
      
      <h2 className={`text-3xl md:text-4xl font-bold font-cormorant mb-4 relative inline-block ${
        title.toLowerCase() === 'achievements' ? 'text-[#f5f5dc]' : 'text-[#2c4035]'
      }`}>
        {title}{' '}
        <motion.span 
          className="text-[#e6a61e] font-abril relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {highlightedWord}
          {/* Underline effect */}
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#e6a61e]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ delay: 0.5, duration: 0.5 }}
          ></motion.span>
        </motion.span>
        
        {/* Decorative dots */}
        <motion.span
          className="absolute -right-6 top-0 text-[#e6a61e] opacity-60"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          &#8226;
        </motion.span>
        <motion.span
          className="absolute -left-6 top-0 text-[#e6a61e] opacity-60"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        >
          &#8226;
        </motion.span>
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto font-raleway relative">
        {description}
        
        {/* Curved line decoration */}
        <motion.svg
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          width="120"
          height="10"
          viewBox="0 0 120 10"
          fill="none"
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <path
            d="M0 5C40 -5 80 15 120 5"
            stroke="#e6a61e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1"
          />
        </motion.svg>
      </p>
    </motion.div>
  );
}