import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, Users, ClipboardCheck, Calculator, BadgePercent } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const valueIcons = [
    { value: 'trust', icon: <Users size={24} className="text-primary-500" /> },
    { value: 'legalClarity', icon: <ClipboardCheck size={24} className="text-primary-500" /> },
    { value: 'emiFlexibility', icon: <Calculator size={24} className="text-primary-500" /> },
    { value: 'brokerFree', icon: <BadgePercent size={24} className="text-primary-500" /> }
  ];

  const milestones = [
    { id: 'milestone1', label: t('about.milestone1') },
    { id: 'milestone2', label: t('about.milestone2') },
    { id: 'milestone3', label: t('about.milestone3') },
    { id: 'milestone4', label: t('about.milestone4') }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {t('about.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Our Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('about.values.title')}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueIcons.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-primary-50 p-3 mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">
                      {t(`about.values.${item.value}`)}
                    </h4>
                    <p className="text-gray-600">
                      {/* Value description would go here */}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline/Milestones */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-100 rounded"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.id}
                  className="relative"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <div className="absolute -left-10 bg-primary-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <Check size={16} className="text-white" />
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-medium text-gray-800">
                      {milestone.label}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};