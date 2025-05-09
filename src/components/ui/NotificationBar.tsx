import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface NotificationBarProps {
  message: string;
  onClose: () => void;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ message, onClose }) => {
  const isVisible = false; // Set to false to hide (sleep mode), true to show

  if (!isVisible) return null;

  return (
    <motion.div 
      className="bg-accent-500 text-white py-3 px-4"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      exit={{ y: -50 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm md:text-base">
          {message || "New Project Launch: Premium Vastu-compliant plots in Vijayawada! Early bird discount available."}
        </p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-accent-600 rounded-full"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
};
