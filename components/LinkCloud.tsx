import React from 'react';
import { MAIN_LINKS, ICON_LINKS } from '../constants';
import { ArrowRightIcon } from './icons/Icons';
import { Spacing } from './Layout';

const LinkCloud: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-lg font-semibold text-center">Simple link cloud</h4>
      <Spacing size={24} />
      <div className="w-full grid grid-cols-1 gap-2.5">
        {MAIN_LINKS.map((link, index) => (
          <a key={index} href={link.url} className="flex justify-between items-center p-6 bg-[#181818] rounded-2xl font-semibold text-white transition-all duration-400 ease-in-out hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.05)] text-left">
            <span className="leading-tight sm:leading-normal">{link.text}</span>
            <div className="w-6 h-6 shrink-0 ml-4"><ArrowRightIcon /></div>
          </a>
        ))}
      </div>
      <Spacing size={24} />
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5">
        {ICON_LINKS.map((link, index) => (
          <a key={index} href={link.url} className="h-[150px] sm:h-[186px] p-6 flex flex-col justify-between items-start bg-[#181818] rounded-2xl font-semibold text-white transition-all duration-400 ease-in-out hover:bg-[#282828]">
            <img src={link.imageUrl} alt="" className="w-8 h-8 object-contain" />
            <span>{link.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkCloud;
