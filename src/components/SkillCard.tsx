'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8, 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
      }}
      className="glass-effect rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center group overflow-hidden"
    >
      <motion.div 
        className="relative"
        whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <i className={`${icon} text-4xl transition-transform duration-300`}></i>
        <motion.div 
          className="absolute inset-0 rounded-full bg-[#e6a61e]/10 filter blur-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
      </motion.div>
      
      <motion.span
        className="mt-4 text-center text-gray-700 font-medium text-sm font-raleway relative inline-block"
        whileHover={{ color: '#2c4035' }}
      >
        <span className="relative z-10">{name}</span>
        <motion.span 
          className="absolute bottom-0 left-0 h-1 bg-[#e6a61e]/40 w-0 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: '100%' }}
          transition={{ duration: 0.2 }}
        ></motion.span>
      </motion.span>
    </motion.div>
  );
}