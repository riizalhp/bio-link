import React from 'react';
import { ContentWrapper, Spacing } from './Layout';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden px-6 sm:px-[5%]">
      <ContentWrapper className="flex flex-col items-center text-center">
        <Spacing size={48} />
        <p className="text-white max-w-[46ch] mb-4">
          Tertarik membuat website link in bio seperti ini?{' '}
          <a
            href="https://riizalhp.site/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#78ff00] underline transition-colors hover:text-white"
          >
            Hubungi saya
          </a>.
        </p>
        <p className="text-[#bababa] max-w-[46ch]">
          © {currentYear} Rizal Hanifa Pratama. All Rights Reserved.
        </p>
        <Spacing size={48} />
      </ContentWrapper>
    </footer>
  );
};

export default Footer;