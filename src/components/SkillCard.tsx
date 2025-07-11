'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      className="glass-effect rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <i className={`${icon} text-4xl`}></i>
        <div className="absolute inset-0 rounded-full bg-[#e6a61e]/10 filter blur-md opacity-0"></div>
      </div>
      
      <span className="mt-4 text-center text-gray-700 font-medium text-sm font-raleway relative inline-block">
        <span className="relative z-10">{name}</span>
      </span>
    </motion.div>
  );
}