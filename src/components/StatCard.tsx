'use client';

interface StatCardProps {
  number: string;
  text: string;
  icon: string;
}

export default function StatCard({ number, text, icon }: StatCardProps) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center border border-white/10">
      <div className="absolute -top-5 bg-gradient-to-br from-[#e6a61e] to-[#f8c054] w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg shadow-[#e6a61e]/20">
        <div className="w-full h-full rounded-2xl flex items-center justify-center overflow-hidden shine-effect">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d={icon} />
          </svg>
        </div>
      </div>
      
      <h3 className="text-4xl md:text-5xl font-bold text-[#e6a61e] font-abril mt-5 drop-shadow-md">
        {number}
      </h3>
      <p className="mt-2 text-center text-white/90 font-raleway">{text}</p>
    </div>
  );
}