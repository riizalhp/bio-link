import React from 'react';
import { ThemeSwitcherIcon } from './icons/Icons';

const ThemeSwitcher: React.FC = () => {
  return (
    <a href="#" className="fixed bottom-5 right-5 z-10 flex items-center gap-1 pl-3 pr-4 py-3 bg-[#181818] text-white text-sm font-medium leading-none rounded-full no-underline">
      <div className="w-6 h-6"><ThemeSwitcherIcon /></div>
      <span>Get light version</span>
    </a>
  );
};

export default ThemeSwitcher;
