import React from 'react';
import { FreeRegisterIcon } from './icons/Icons';
import { Spacing } from './Layout';

const Events: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-lg font-semibold text-center">Upcoming events</h2>
      <Spacing size={24} />
      <div 
        className="w-full h-[350px] p-6 rounded-[24px] sm:rounded-[32px] flex flex-col justify-between text-white bg-cover bg-center"
        style={{backgroundImage: "linear-gradient(180deg, transparent, #0a1b1a), url('https://i.postimg.cc/DZFbzrPH/rizal-hanifa-pratama-web-developer-cv.webp')"}}
      >
        <div className="flex justify-end">
          <div className="w-20 h-20 p-4 flex flex-col justify-center items-center bg-[#78ff00] text-black rounded-2xl text-center">
            <h2 className="text-2xl font-bold leading-none">25</h2>
            <p className="text-sm font-medium">August</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold max-w-xs">Launching MVP Resume AI</h3>
          <Spacing size={4} />
          <p className="text-white/60 max-w-xs">The launch of our new AI-powered resume builder.</p>
          <Spacing size={20} />
          <a href="#" className="inline-flex h-12 px-4 py-3 justify-center items-center gap-2.5 rounded-2xl bg-[#78ff00] text-black font-medium transition-all duration-400 ease-in-out hover:shadow-[0_6px_20px_0_rgba(120,255,0,0.1)]">
            <FreeRegisterIcon isBlack={true}/>
            <span>Try it Free</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;