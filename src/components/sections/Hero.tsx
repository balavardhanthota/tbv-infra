import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('hero.tagline')}
          </motion.h1>
          
          <motion.div 
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#projects" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors shadow-lg"
            >
              {t('hero.exploreProjects')}
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-50 text-primary-600 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors shadow-lg"
            >
              {t('hero.applyLoan')}
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div 
        className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
        style={{ animationName: 'float', animationDuration: '6s', animationIterationCount: 'infinite' }}
      />
      <motion.div 
        className="absolute top-32 right-32 w-16 h-16 border-2 border-primary-400/30 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.8 }}
        style={{ animationName: 'float', animationDuration: '8s', animationIterationCount: 'infinite' }}
      />
    </section>
  );
};