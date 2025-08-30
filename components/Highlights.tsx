import React from 'react';
import { ClockIcon, FollowersIcon, LocationIcon, PartnershipIcon } from './icons/Icons';
import { Spacing } from './Layout';

const Highlights: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div 
        className="p-6 rounded-[32px] bg-[#94d7c5] text-[#1f4a47] bg-no-repeat bg-right-top" 
        style={{backgroundImage: "url('https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514411d4cbe6f45_social_bg.svg')"}}
      >
        <div className="w-12 h-12"><FollowersIcon /></div>
        <Spacing size={20} />
        <div className="text-5xl sm:text-[54px] font-bold">1.5k</div>
        <Spacing size={8} />
        <div className="font-bold text-[#070707]">followers across media</div>
        <Spacing size={4} />
        <p>measured for facebook, twitter, instagram and linkedin</p>
        <Spacing size={48} />
        <p>Last updated Aug 25</p>
      </div>

      <div 
        className="p-6 rounded-[32px] bg-[#f4dfe2] text-[#070707] bg-no-repeat bg-right-bottom"
        style={{backgroundImage: "url('https://assets.website-files.com/62e0f8da35144168e1be6f3d/62e0f8da3514412a1bbe6f47_purbple_g_pattern.svg')"}}
      >
        <h2 className="font-bold">Need a digital product development?</h2>
        <Spacing size={4} />
        <p className="opacity-60">I specialize in crafting high-quality websites and applications.</p>
        <Spacing size={32} />
        <a href="#" className="text-black font-bold">Send me a message</a>
      </div>

      <div className="sm:col-span-2 p-6 rounded-[32px] bg-[#181818]">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
          <div className="max-w-xs">
            <h2 className="text-lg font-semibold">Let's Build Something Great</h2>
            <Spacing size={4} />
            <p className="text-[#bababa]">Have a project in mind? Let's schedule a chat to discuss how I can help bring your digital product to life.</p>
          </div>
          <a href="#" className="w-16 h-16 shrink-0"><PartnershipIcon/></a>
        </div>
        <Spacing size={24} />
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6"><ClockIcon /></div>
            <div>30 Minutes</div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6"><LocationIcon /></div>
            <div>Google Meets</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;