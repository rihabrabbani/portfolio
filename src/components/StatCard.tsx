'use client';

import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  text: string;
  icon: string;
}

export default function StatCard({ number, text, icon }: StatCardProps) {
  return (
    <motion.div 
      className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)' }}
    >
      <motion.div 
        className="absolute -top-5 bg-gradient-to-br from-[#e6a61e] to-[#f8c054] w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-[#e6a61e]/20"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden shine-effect">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d={icon} />
          </svg>
        </motion.div>
      </motion.div>
      
      <motion.h3 
        className="text-4xl md:text-5xl font-bold text-[#e6a61e] font-abril mt-5 drop-shadow-md"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        {number}
      </motion.h3>
      <p className="mt-2 text-center text-white/90 font-raleway">{text}</p>
      
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e6a61e] to-transparent"
        initial={{ opacity: 0, width: "0%" }}
        whileHover={{ opacity: 1, width: "100%" }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  );
}