import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, AlertCircle, TrendingDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmiCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [calculationResult, setCalculationResult] = useState<{
    emi: number;
    totalAmount: number;
    totalInterest: number;
    savingsSuggestion?: {
      alternativeTenure: number;
      monthlySavings: number;
      totalSavings: number;
    };
  } | null>(null);

  const calculateEmi = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTenure * 12;

    const emiValue = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalAmount = emiValue * time;
    const totalInterest = totalAmount - principal;

    let savingsSuggestion;
    if (loanTenure > 10) {
      const alternativeTenure = 10;
      const alternativeTime = alternativeTenure * 12;
      const alternativeEmi = principal * rate * Math.pow(1 + rate, alternativeTime) / (Math.pow(1 + rate, alternativeTime) - 1);
      const alternativeTotalAmount = alternativeEmi * alternativeTime;

      savingsSuggestion = {
        alternativeTenure,
        monthlySavings: alternativeEmi - emiValue,
        totalSavings: totalAmount - alternativeTotalAmount,
      };
    }

    setCalculationResult({
      emi: Math.round(emiValue),
      totalAmount: Math.round(totalAmount),
      totalInterest: Math.round(totalInterest),
      savingsSuggestion,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="p-4 border-b flex justify-between items-center bg-primary-50">
              <h3 className="text-xl font-bold text-primary-700">{t('emiCalculator.title')}</h3>
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('emiCalculator.loanAmount')}
                  </label>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('emiCalculator.interestRate')} (%)
                  </label>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    step="0.1"
                    min="1"
                    max="20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t('emiCalculator.loanTenure')} (Years)
                  </label>
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={(e) => setLoanTenure(Number(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="1"
                    max="30"
                  />
                </div>
                <button
                  onClick={calculateEmi}
                  className="w-full bg-primary-600 text-white font-semibold py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  {t('emiCalculator.calculate')}
                </button>
              </div>

              {calculationResult && (
                <div className="space-y-5">
                  <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Loan Summary</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-600">Monthly EMI</p>
                        <p className="text-xl font-bold text-primary-600">₹{calculationResult.emi.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Interest</p>
                        <p className="text-xl font-bold text-primary-600">₹{calculationResult.totalInterest.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Principal</p>
                        <p className="text-xl font-bold text-primary-600">₹{loanAmount.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Total Payment</p>
                        <p className="text-xl font-bold text-primary-600">₹{calculationResult.totalAmount.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>

                  {calculationResult.savingsSuggestion && (
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                      <div className="flex items-start">
                        <TrendingDown className="text-blue-500 mr-3 mt-1" size={22} />
                        <div>
                          <h4 className="text-sm font-semibold text-blue-800">Money-Saving Tip</h4>
                          <p className="text-sm text-blue-600 mt-1">
                            Consider reducing your loan tenure to {calculationResult.savingsSuggestion.alternativeTenure} years:
                          </p>
                          <ul className="mt-2 space-y-1 text-sm text-blue-600">
                            <li>• Monthly EMI increase: ₹{Math.abs(Math.round(calculationResult.savingsSuggestion.monthlySavings)).toLocaleString()}</li>
                            <li>• Total interest saved: ₹{Math.round(calculationResult.savingsSuggestion.totalSavings).toLocaleString()}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="text-amber-500 mr-3 mt-1" size={22} />
                      <div>
                        <h4 className="text-sm font-semibold text-amber-800">Important Note</h4>
                        <p className="text-sm text-amber-600 mt-1">
                          This calculation is an estimate. Actual EMI values may vary due to bank charges and fees. Please consult a financial advisor before proceeding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
