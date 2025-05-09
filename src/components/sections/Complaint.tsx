import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle, Upload, Eye, EyeOff } from 'lucide-react';

export const Complaint: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    complaintType: '',
    details: '',
  });
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);

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
      // Generate a random tracking ID
      const id = Math.random().toString(36).substring(2, 10).toUpperCase();
      setTrackingId(id);
      
      // Reset form
      setFormData({
        name: '',
        complaintType: '',
        details: '',
      });
      setFile(null);
    }, 1500);
  };

  return (
    <section id="complaint" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('complaint.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {t('complaint.description')}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            {trackingId ? (
              <div className="text-center p-4">
                <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                  <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Complaint Submitted</h3>
                  <p className="mt-1 text-sm text-gray-600">Your complaint has been received and we will investigate it promptly.</p>
                  <div className="mt-4 p-3 bg-gray-100 rounded-md inline-block">
                    <p className="text-sm text-gray-600">{t('complaint.trackingId')}</p>
                    <p className="text-lg font-semibold text-gray-800">{trackingId}</p>
                  </div>
                </div>
                <button
                  onClick={() => setTrackingId(null)}
                  className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  Submit Another Complaint
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                  <div className="flex items-start">
                    <AlertTriangle size={20} className="text-yellow-500 mr-3 mt-0.5" />
                    <p className="text-sm text-yellow-700">
                      We take all complaints seriously and will investigate thoroughly. All information provided will be kept confidential.
                    </p>
                  </div>
                </div>
                
                <div className="mb-4 flex items-center">
                  <button
                    type="button"
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className="flex items-center text-sm font-medium text-gray-700 mr-2"
                  >
                    {isAnonymous ? (
                      <EyeOff size={18} className="mr-2 text-primary-500" />
                    ) : (
                      <Eye size={18} className="mr-2 text-primary-500" />
                    )}
                    {t('complaint.anonymous')}
                  </button>
                </div>
                
                {!isAnonymous && (
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      {t('complaint.form.name')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('complaint.form.complaintType')}
                  </label>
                  <select
                    name="complaintType"
                    value={formData.complaintType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select Complaint Type</option>
                    <option value="misrepresentation">{t('complaint.options.misrepresentation')}</option>
                    <option value="illegalBrokerage">{t('complaint.options.illegalBrokerage')}</option>
                    <option value="fraud">{t('complaint.options.fraud')}</option>
                    <option value="other">{t('complaint.options.other')}</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('complaint.form.details')}
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {t('complaint.form.uploadProof')}
                  </label>
                  <div className="relative border border-dashed border-gray-300 rounded-md p-4">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-gray-400" />
                      <p className="mt-1 text-sm text-gray-500">
                        {file ? file.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        Supports: JPG, PNG, PDF (max 5MB)
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
                  {isSubmitting ? 'Submitting...' : t('complaint.form.submit')}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};