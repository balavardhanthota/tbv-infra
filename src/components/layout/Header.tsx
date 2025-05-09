import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageSelector } from '../features/LanguageSelector';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const navItems = [
    { id: 'home', label: t('navigation.home') },
    { id: 'about', label: t('navigation.about') },
    { id: 'projects', label: t('navigation.projects') },
    { id: 'partner', label: t('navigation.partnerWithUs') },
    { id: 'contact', label: t('navigation.contact') },
    { id: 'complaint', label: t('navigation.complaint') }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
  className="flex items-center cursor-pointer" 
  onClick={() => scrollToSection('home')}
>
  <img 
    src="/logo.png" 
    alt="TBV Infra Logo" 
    className={`h-12 w-auto ${isScrolled ? '' : 'invert'}`} 
  />
</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                activeSection === item.id
                  ? isScrolled ? 'text-primary-600' : 'text-primary-300'
                  : isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Language selector */}
          <div className="relative">
            <button 
              className={`flex items-center text-sm font-medium transition-colors hover:text-primary-500 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <Globe size={18} className="mr-1" />
              <span className="sr-only md:not-sr-only">Language</span>
            </button>
            
            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <LanguageSelector onSelect={() => setShowLanguageMenu(false)} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <a 
            href="/opportunities" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-600 hover:bg-gray-100'
            }`}
          >
            {t('navigation.opportunities')}
          </a> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white pt-16"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`py-3 px-4 text-left text-lg font-medium rounded-md ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* <a 
                href="/opportunities"
                className="py-3 px-4 text-left text-lg font-medium rounded-md bg-primary-600 text-white hover:bg-primary-700"
              >
                {t('navigation.opportunities')}
              </a> */}
              
              <div className="py-3 px-4">
                <p className="text-gray-500 mb-2">Select Language</p>
                <LanguageSelector onSelect={() => setMobileMenuOpen(false)} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};