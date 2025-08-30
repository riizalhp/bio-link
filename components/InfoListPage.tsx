import React from 'react';
import { InfoItem } from '../types';
import { InfoIcons, ChevronLeftIcon } from './icons/Icons';
import { Section, ContentWrapper, Spacing, LineDivider } from './Layout';

interface InfoListPageProps {
  title: string;
  items: InfoItem[];
}

const InfoCard: React.FC<{ item: InfoItem }> = ({ item }) => {
  const IconComponent = InfoIcons[item.icon as keyof typeof InfoIcons];
  return (
    <div className="flex flex-col p-6 bg-[#181818] rounded-3xl h-full text-left">
      {IconComponent && <div className="w-10 h-10 mb-4 text-[#78ff00]"><IconComponent /></div>}
      <h3 className="text-lg font-bold">{item.title}</h3>
      <Spacing size={8} />
      <p className="text-sm text-gray-400 flex-grow">{item.description}</p>
    </div>
  );
};

const InfoListPage: React.FC<InfoListPageProps> = ({ title, items }) => {
  const goBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };
  
  return (
    <Section>
      <ContentWrapper>
        <Spacing size={48} />
        <div className="relative flex items-center justify-center mb-6">
            <a href="#" onClick={goBack} className="absolute left-0 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all" aria-label="Go back">
                <ChevronLeftIcon />
            </a>
            <h2 className="text-2xl font-bold text-center px-10">{title}</h2>
        </div>
        <Spacing size={24} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <InfoCard key={item.title} item={item} />
          ))}
        </div>
        <Spacing size={48} />
      </ContentWrapper>
    </Section>
  );
};

export default InfoListPage;