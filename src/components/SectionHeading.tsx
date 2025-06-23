'use client';

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
    <div className="text-center mb-16 relative">
      {/* Decorative element */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-[100px] h-[2px] bg-gradient-to-r from-transparent via-[#e6a61e] to-transparent"></div>
      
      <h2 className={`text-3xl md:text-4xl font-bold font-cormorant mb-4 relative inline-block ${
        title.toLowerCase() === 'achievements' ? 'text-[#f5f5dc]' : 'text-[#2c4035]'
      }`}>
        {title}{' '}
        <span className="text-[#e6a61e] font-abril relative">
          {highlightedWord}
          {/* Underline effect */}
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#e6a61e]"></span>
        </span>
        
        {/* Decorative dots */}
        <span className="absolute -right-6 top-0 text-[#e6a61e] opacity-60">
          &#8226;
        </span>
        <span className="absolute -left-6 top-0 text-[#e6a61e] opacity-60">
          &#8226;
        </span>
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto font-raleway relative">
        {description}
        
        {/* Curved line decoration */}
        <svg
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
          width="120"
          height="10"
          viewBox="0 0 120 10"
          fill="none"
        >
          <path
            d="M0 5C40 -5 80 15 120 5"
            stroke="#e6a61e"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="1"
          />
        </svg>
      </p>
    </div>
  );
}