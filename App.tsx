import React, { useLayoutEffect } from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Availability from './components/Availability';
import Events from './components/Events';
import Footer from './components/Footer';
import { RiizalhpLogo } from './components/icons/Icons';
import { Section, ContentWrapper, Spacing, LineDivider } from './components/Layout';

const App: React.FC = () => {
  useLayoutEffect(() => {
    // This effect runs synchronously before the browser paints.
    // It ensures that on any page load or refresh, the app resets to the homepage
    // by cleaning the URL hash before the user sees the content.
    if (window.location.hash) {
      try {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      } catch (e) {
        // In sandboxed environments, this may fail.
        console.warn("Could not clean URL hash, likely due to security restrictions:", e);
      }
    }
  }, []); // Empty dependency array ensures this runs only once.
  
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-[#070707] text-white text-[16px] leading-[150%] tracking-[-0.3px]">
      <Section>
        <ContentWrapper className="flex flex-col items-center">
          <Spacing size={24} />
          <a href="#" onClick={goHome} aria-label="Back to homepage"><RiizalhpLogo /></a>
          <Spacing size={24} />
          <LineDivider />
        </ContentWrapper>
      </Section>
      
      <main>
        <Header />

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
            <Availability />
            <Spacing size={48} />
            <LineDivider />
          </ContentWrapper>
        </Section>
        
        <Section>
          <ContentWrapper>
            <Highlights />
          </ContentWrapper>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;