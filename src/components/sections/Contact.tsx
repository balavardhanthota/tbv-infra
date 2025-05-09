import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        city: '',
        message: '',
      });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60885.69188403626!2d78.40321167910157!3d17.44676700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c87d7b1bb%3A0x1e89a9d9a7159d16!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1653056420299!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {t('contact.headOffice')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">{t('contact.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-primary-500 mr-3 mt-1" />
                    <div>
                      <p className="text-gray-700">info@tbvinfra.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="flex items-center mb-6">
              <MessageSquare size={24} className="text-primary-500 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                {t('contact.form.submit')}
              </h3>
            </div>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
                Thank you for your message. We will contact you soon!
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('contact.form.name')}
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
                      {t('contact.form.phone')}
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
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('contact.form.city')}
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select City</option>
                    <option value="vijayawada">{t('projects.locations.vijayawada')}</option>
                    <option value="hyderabad">{t('projects.locations.hyderabad')}</option>
                    <option value="guntur">{t('projects.locations.guntur')}</option>
                    <option value="kurnool">{t('projects.locations.kurnool')}</option>
                    <option value="khammam">{t('projects.locations.khammam')}</option>
                    <option value="avanigadda">{t('projects.locations.avanigadda')}</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-600 text-white py-3 rounded-md font-medium transition-colors ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-700'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};