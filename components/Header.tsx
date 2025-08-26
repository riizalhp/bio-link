import React from 'react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../constants';
import { SocialLink } from '../types';
import { SocialIcons, VerifiedBadge, PortfolioIcon, TipIcon } from './icons/Icons';
import { ContentWrapper, Spacing } from './Layout';

const SocialIcon: React.FC<{ link: SocialLink }> = ({ link }) => {
  const IconComponent = SocialIcons[link.icon as keyof typeof SocialIcons];
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 bg-[#181818] rounded-full transition-all duration-400 ease-in-out hover:border hover:border-[#484848] hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.05)]">
      {IconComponent && <IconComponent />}
    </a>
  );
};

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden px-6 sm:px-[5%]">
      <ContentWrapper className="flex flex-col items-center">
        <Spacing size={48} />
        <div className="flex justify-center items-center w-20 h-20 sm:w-[120px] sm:h-[120px] p-2.5 border-2 border-[#181818] rounded-full">
          <img src={PROFILE_DATA.imageUrl} loading="lazy" alt="Rizal Hanifa Pratama Profile" className="max-h-full max-w-full rounded-full object-cover" />
        </div>
        <Spacing size={24} />
        <div className="text-center max-w-[46ch]">
          <div className="flex justify-center items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-semibold -tracking-[0.3px]">{PROFILE_DATA.name}</h1>
            <div className="w-5 h-5"><VerifiedBadge /></div>
          </div>
          <Spacing size={8} />
          <p className="text-[#bababa]">{PROFILE_DATA.bio}</p>
        </div>
        <Spacing size={24} />
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOCIAL_LINKS.map(link => <SocialIcon key={link.name} link={link} />)}
        </div>
        <Spacing size={24} />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2.5 w-full">
          <a href="https://riizalhp.web.id/" target="_blank"  rel="noopener noreferrer" className="flex h-12 px-4 py-3 justify-center items-center gap-2.5 rounded-2xl bg-[#181818] text-white font-medium transition-all duration-400 ease-in-out hover:shadow-[0_6px_20px_0_rgba(0,0,0,0.05)] w-full sm:w-auto">
            <PortfolioIcon />
            <span>My portfolio</span>
          </a>
          <a href="https://trakteer.id/riizalhp/tip" target="_blank" rel="noopener noreferrer" className="flex h-12 px-4 py-3 justify-center items-center gap-2.5 rounded-2xl bg-[#78ff00] text-black font-medium transition-all duration-400 ease-in-out hover:shadow-[0_6px_20px_0_rgba(120,255,0,0.1)] w-full sm:w-auto">
            <TipIcon />
            <span>Send me a tip</span>
          </a>
        </div>
        <Spacing size={48} />
      </ContentWrapper>
    </header>
  );
};

export default Header;