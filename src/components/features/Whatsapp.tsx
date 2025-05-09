import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const Whatsapp: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href="https://wa.me/916301068850"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors"
      >
        <MessageCircle size={24} className="mr-2" />
        <span className="hidden md:inline">{t('whatsapp.chat')}</span>
      </a>
    </motion.div>
  );
};