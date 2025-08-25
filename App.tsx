import React from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Availability from './components/Availability';
import Events from './components/Events';
import Pricing from './components/Ad';
import Footer from './components/Footer';
import { RiizalhpLogo } from './components/icons/Icons';
import { Section, ContentWrapper, Spacing, LineDivider } from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="bg-[#070707] text-white text-[16px] leading-[150%] tracking-[-0.3px]">
      <Section>
        <ContentWrapper className="flex flex-col items-center">
          <Spacing size={24} />
          <RiizalhpLogo />
          <Spacing size={24} />
          <LineDivider />
        </ContentWrapper>
      </Section>
      
      <Header />

      <main>
        <Section>
          <ContentWrapper>
            <Highlights />
          </ContentWrapper>
        </Section>
        
        <Section>
          <ContentWrapper>
            <Spacing size={48} />
            <Availability />
            <Spacing size={48} />
            <LineDivider />
          </ContentWrapper>
        </Section>

        <Section>
          <ContentWrapper>
            <Spacing size={48} />
            <Events />
            <Spacing size={48} />
            <LineDivider />
          </ContentWrapper>
        </Section>

        <Section>
          <ContentWrapper>
            <Spacing size={48} />
            <Pricing />
            <Spacing size={48} />
            <LineDivider />
          </ContentWrapper>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;