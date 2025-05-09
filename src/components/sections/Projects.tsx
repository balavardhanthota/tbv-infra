import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, FileText, Calculator, CheckSquare } from 'lucide-react';
import { GoogleMap } from '../ui/GoogleMap';
import { EmiCalculator } from '../features/EmiCalculator';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState('vijayawada');
  const [showEmiCalculator, setShowEmiCalculator] = useState(false);

  // Project data
  const projects = {
    vijayawada: {
      title: t('projects.locations.vijayawada'),
      manager: '+91 9876543210',
      overview: 'Premium residential plots near Gannavaram Airport',
      plotSizes: '200 sq yd, 267 sq yd, 300 sq yd',
      approvals: 'DTCP & Rera Approved, Bank Loan Available',
      coordinates: { lat: 16.5062, lng: 80.6480 },
      vastuFeatures: [
        'East/North facing plots',
        'Proper road width as per Vastu',
        'Corner plots available',
        'Natural water flow direction'
      ]
    },
    hyderabad: {
      title: t('projects.locations.hyderabad'),
      manager: '+91 9876543211',
      overview: 'Gated community plots in Shamshabad',
      plotSizes: '200 sq yd, 300 sq yd, 500 sq yd',
      approvals: 'HMDA Approved, Bank Loan Available',
      coordinates: { lat: 17.3850, lng: 78.4867 },
      vastuFeatures: [
        'Perfect rectangular plots',
        'Vastu-compliant entrance',
        'Optimal plot elevation',
        'Favorable surroundings'
      ]
    },
    guntur: {
      title: t('projects.locations.guntur'),
      manager: '+91 9876543212',
      overview: 'Highway-facing commercial plots',
      plotSizes: '300 sq yd, 500 sq yd, 1000 sq yd',
      approvals: 'DTCP & Rera Approved, Bank Loan Available',
      coordinates: { lat: 16.3067, lng: 80.4365 },
      vastuFeatures: [
        'East-facing commercial plots',
        'Wide road access',
        'Level ground',
        'Proper drainage system'
      ]
    },
    kurnool: {
      title: t('projects.locations.kurnool'),
      manager: '+91 78424332626',
      overview: 'Residential plots with modern amenities',
      plotSizes: '200 sq yd, 267 sq yd',
      approvals: 'DTCP & Rera Approved, Bank Loan Available',
      coordinates: { lat: 15.8281, lng: 78.0373 },
      vastuFeatures: [
        'North-east corner plots',
        'Vastu-compliant layout',
        'Natural slope for drainage',
        'Positive energy zones'
      ]
    },
    khammam: {
      title: t('projects.locations.khammam'),
      manager: '+91 78424332626',
      overview: 'Residential and agricultural plots',
      plotSizes: '250 sq yd, 500 sq yd',
      approvals: 'DTCP & Rera Approved, Bank Loan Available',
      coordinates: { lat: 17.2476, lng: 80.1515 },
      vastuFeatures: [
        'East-facing entrance',
        'Rectangular shape',
        'Proper sunlight exposure',
        'Natural ventilation'
      ]
    },
    avanigadda: {
      title: t('projects.locations.avanigadda'),
      manager: '+91 78424332626',
      overview: 'Riverside plots with scenic views',
      plotSizes: '200 sq yd, 300 sq yd',
      approvals: 'DTCP & Rera Approved, Bank Loan Available',
      coordinates: { lat: 16.0217, lng: 80.9170 },
      vastuFeatures: [
        'Water body in northeast',
        'Natural elevation',
        'Proper plot dimensions',
        'Auspicious directions'
      ]
    },
  };

  // Bank logos with direct CDN links
  const bankLogos = [
    '/axislogo.png',
    '/hdfclogo.png',
    '/sbilogo.png',
    '/kotaklogo.png'
  ];
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Location Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(projects).map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeLocation === location
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t(`projects.locations.${location}`)}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <GoogleMap 
              location={projects[activeLocation as keyof typeof projects].coordinates} 
              zoom={13} 
              height="400px"
            />
          </motion.div>

          {/* Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <MapPin size={24} className="text-primary-500 mr-2" />
              {projects[activeLocation as keyof typeof projects].title}
            </h3>
            
            <div className="mb-6">
              <div className="flex items-start mb-4">
                <Phone size={20} className="text-gray-500 mr-3 mt-1" />
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t('projects.contactManager')}</p>
                  <p className="font-medium text-gray-800">
                    {projects[activeLocation as keyof typeof projects].manager}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-1">{t('projects.projectOverview')}</p>
                <p className="font-medium text-gray-800">
                  {projects[activeLocation as keyof typeof projects].overview}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t('projects.plotSizes')}</p>
                  <p className="font-medium text-gray-800">
                    {projects[activeLocation as keyof typeof projects].plotSizes}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">{t('projects.approvals')}</p>
                  <p className="font-medium text-gray-800">
                    {projects[activeLocation as keyof typeof projects].approvals}
                  </p>
                </div>
              </div>

              {/* Vastu Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  <CheckSquare size={20} className="text-primary-500 mr-2" />
                  100% Vastu Compliant
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {projects[activeLocation as keyof typeof projects].vastuFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <button 
                className="flex items-center bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
              >
                <FileText size={18} className="mr-2" />
                {t('projects.brochure')}
              </button>
              
              <button 
                onClick={() => setShowEmiCalculator(true)}
                className="flex items-center bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
              >
                <Calculator size={18} className="mr-2" />
                {t('projects.emiCalculator')}
              </button>
            </div>
            
            <div>
              <p className="text-sm text-gray-500 mb-3">{t('projects.loanSupport')}</p>
              <div className="flex flex-wrap gap-4">
                {bankLogos.map((logo, index) => (
                  <img 
                    key={index} 
                    src={logo} 
                    alt="Bank Logo" 
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* EMI Calculator Modal */}
      <EmiCalculator 
        isOpen={showEmiCalculator} 
        onClose={() => setShowEmiCalculator(false)} 
      />
    </section>
  );
};