'use client';

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <div className="glass-effect rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative">
        <i className={`${icon} text-4xl`}></i>
        <div className="absolute inset-0 rounded-full bg-[#e6a61e]/10 filter blur-md opacity-0"></div>
      </div>
      
      <span className="mt-4 text-center text-gray-700 font-medium text-sm font-raleway relative inline-block">
        <span className="relative z-10">{name}</span>
      </span>
    </div>
  );
}