import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {/* Logo and Description */}
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <div className="flex items-center mb-4">
          <img 
            src="/logo.png" 
            alt="TBV Infra Logo" 
            className="h-10 w-auto"
          />
        </div>

            <p className="text-gray-400 mb-6">
              Trusted plots and transparent deals in Telangana and Andhra Pradesh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" />
                  {t('footer.brochures')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" />
                  {t('footer.projects')}
                </a>
              </li>
              <li>
                {/* <a href="/opportunities" className="text-gray-400 hover:text-primary-400 flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" />
                  {t('footer.jobs')}
                </a> */}
              </li>
              <li>
                <a href="#complaint" className="text-gray-400 hover:text-primary-400 flex items-center transition-colors">
                  <ArrowRight size={16} className="mr-2" />
                  {t('footer.complaint')}
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
<div className="col-span-1">
  <h3 className="text-lg font-semibold mb-4">{t('projects.title')}</h3>
  <ul className="space-y-2">
    <li>
      <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
        {t('projects.locations.vijayawada')}
      </a>
    </li>
    <li>
      <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
        {t('projects.locations.hyderabad')}
      </a>
    </li>
    <li>
      <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
        {t('projects.locations.guntur')}
      </a>
    </li>
    <li>
      <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
        {t('projects.locations.kurnool')}
      </a>
    </li>
    <li>
      <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors">
        {t('projects.locations.khammam')}
      </a>
    </li>
  </ul>
</div>


          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">
                {t('contact.headOffice')}:
              </p>
              <p className="text-gray-400 mb-4">
                {t('contact.address')}
              </p>
              <p className="text-gray-400 mb-2">
                {t('contact.phone')}: +91 9441392121
              </p>
              <p className="text-gray-400">
                {t('contact.email')}: ceo@tbvinfra.com
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-gray-500 text-sm flex items-center mt-4 md:mt-0">
            {t('footer.madeIn')} 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
};