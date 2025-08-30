import React, { useState, useLayoutEffect } from 'react';
import Header from './components/Header';
import Highlights from './components/Highlights';
import Availability from './components/Availability';
import Events from './components/Events';
import Pricing from './components/Ad';
import Footer from './components/Footer';
import InfoListPage from './components/InfoListPage';
import { RiizalhpLogo } from './components/icons/Icons';
import { Section, ContentWrapper, Spacing, LineDivider } from './components/Layout';
import { SECTIONS_LIST, PAGES_LIST } from './constants';

const App: React.FC = () => {
  // Initialize state to empty string to always show the homepage on initial load.
  const [route, setRoute] = useState('');

  useLayoutEffect(() => {
    // This effect runs synchronously before the browser paints.
    // It ensures that on any page load or refresh, the app resets to the homepage
    // by cleaning the URL hash before the user sees the content.
    if (window.location.hash) {
      try {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      } catch (e) {
        // In sandboxed environments, this may fail. We can ignore the error
        // as the initial state will still render the homepage.
        console.warn("Could not clean URL hash, likely due to security restrictions:", e);
      }
    }
    
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup the event listener when the component unmounts.
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // Empty dependency array ensures this runs only once.
  
  const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Setting the hash will trigger the 'hashchange' event listener to update the route.
    window.location.hash = '';
  };

  const isInfoPage = route === '#/sections' || route === '#/pages';

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
        {isInfoPage ? (
          <>
            {route === '#/sections' && <InfoListPage title="List Section untuk Landing Page" items={SECTIONS_LIST} />}
            {route === '#/pages' && <InfoListPage title="List Halaman untuk Website Multi-Page" items={PAGES_LIST} />}
          </>
        ) : (
          <>
            <Header />
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
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;