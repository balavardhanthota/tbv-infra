import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Upload, Handshake } from 'lucide-react';

export const PartnerWithUs: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    partnerType: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        partnerType: '',
        message: '',
      });
      setFile(null);
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="partner" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('partner.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {t('partner.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Partner Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('partner.submitProposal')}
            </h3>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
                Thank you for your interest in partnering with us. We will contact you soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('partner.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('partner.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('partner.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('partner.form.partnerType')}
                    </label>
                    <select
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Partner Type</option>
                      <option value="bank">{t('partner.partnerTypes.bank')}</option>
                      <option value="legal">{t('partner.partnerTypes.legal')}</option>
                      <option value="vendor">{t('partner.partnerTypes.vendor')}</option>
                      <option value="landProvider">{t('partner.partnerTypes.landProvider')}</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('partner.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('partner.form.uploadDocs')}
                  </label>
                  <div className="relative border border-dashed border-gray-300 rounded-md p-4">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      <Upload className="mx-auto h-10 w-10 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-500">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-600 text-white py-3 rounded-md font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : t('partner.form.submit')}
                </button>
              </form>
            )}
          </motion.div>

          {/* Partner Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="max-w-md">
              <div className="flex justify-center mb-8">
                <Handshake size={80} className="text-primary-500" />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Partner Benefits
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Access to prime land parcels across Andhra Pradesh and Telangana</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Revenue sharing models with competitive commission structures</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Marketing support and co-branded promotional materials</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Legal and documentation assistance for all transactions</p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary-100 rounded-full p-1 mr-3 mt-0.5">
                      <svg className="h-4 w-4 text-primary-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Priority access to new project launches and exclusive deals</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};