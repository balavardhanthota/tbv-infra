import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { AboutUs } from './components/sections/AboutUs';
import { Projects } from './components/sections/Projects';
import { PartnerWithUs } from './components/sections/PartnerWithUs';
import { Contact } from './components/sections/Contact';
import { Complaint } from './components/sections/Complaint';
import { Whatsapp } from './components/features/Whatsapp';
import { NotificationBar } from './components/ui/NotificationBar';
import './i18n/i18n';

function App() {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {showNotification && (
        <NotificationBar 
          message={t('notification.newProject')} 
          onClose={() => setShowNotification(false)} 
        />
      )}
      <Header activeSection={activeSection} />
      <main className="flex-grow">
        <Hero />
        <AboutUs />
        <Projects />
        <PartnerWithUs />
        <Contact />
        <Complaint />
      </main>
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;