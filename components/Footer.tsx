import React from 'react';
import { ContentWrapper, Spacing } from './Layout';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden px-6 sm:px-[5%]">
      <ContentWrapper className="flex flex-col items-center text-center">
        <Spacing size={48} />
        <p className="text-[#bababa] max-w-[46ch]">
          © {currentYear} Rizal Hanifa Pratama. All Rights Reserved.
        </p>
        <Spacing size={48} />
      </ContentWrapper>
    </footer>
  );
};

export default Footer;