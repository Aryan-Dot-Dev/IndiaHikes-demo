import { Mountain, Map, Compass, Camera, Backpack, Tent, Footprints } from 'lucide-react';

import { useState, useEffect } from 'react';

const FloatingIcon = ({ icon: Icon, className, animationDelay = 0, animationDuration = 20 }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setIsClicked(true);
    setClickCount(prev => prev + 1);
    setTimeout(() => setIsClicked(false), 600);
  };

  // Special effect every 3 clicks
  useEffect(() => {
    if (clickCount > 0 && clickCount % 3 === 0) {
      // Trigger a special animation sequence
      const element = document.querySelector(`.${className}`);
      if (element) {
        element.style.animationDuration = '0.5s';
        setTimeout(() => {
          element.style.animationDuration = `${animationDuration}s`;
        }, 2000);
      }
    }
  }, [clickCount, className, animationDuration]);

  return (
    <div
      className={`absolute opacity-20 hover:opacity-40 hover:scale-110 transition-all duration-500 cursor-pointer select-none ${className} ${
        isClicked ? 'animate-bounce' : ''
      }`}
      style={{
        animation: `float${animationDelay % 3 + 1} ${animationDuration}s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        filter: isHovered ? 'drop-shadow(0 0 12px rgba(239, 183, 26, 0.8))' : 'none',
        transform: isClicked ? 'scale(1.2)' : 'scale(1)',
      }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon
        className={`w-8 h-8 transition-all duration-300 ${
          isHovered ? 'text-[#0CE88C] rotate-12 scale-110' : 'text-[#EFB71A]'
        } ${isClicked ? 'animate-spin' : ''}`}
      />

      {/* Click ripple effect */}
      {isClicked && (
        <div className="absolute inset-0 rounded-full bg-[#EFB71A]/30 animate-ping" />
      )}
    </div>
  );
};

export default FloatingIcon;