import { useState, useEffect } from 'react';
import { IndianRupee } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 lakhs
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const months = loanTenure * 12;

    if (monthlyRate === 0) {
      const calculatedEmi = principal / months;
      setEmi(calculatedEmi);
      setTotalInterest(0);
      setTotalAmount(principal);
    } else {
      const calculatedEmi = 
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
      
      const calculatedTotalAmount = calculatedEmi * months;
      const calculatedTotalInterest = calculatedTotalAmount - principal;

      setEmi(calculatedEmi);
      setTotalInterest(calculatedTotalInterest);
      setTotalAmount(calculatedTotalAmount);
    }
  };

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLakhs = (amount: number) => {
    const lakhs = amount / 100000;
    return `${lakhs.toFixed(1)} L`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculator Inputs */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-heading font-semibold text-xl text-primary-500 mb-6">
            Loan Details
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block font-body font-medium text-neutral-700 mb-2">
                Loan Amount: {formatCurrency(loanAmount)}
              </label>
              <input
                type="range"
                min="1000000"
                max="20000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-neutral-500 mt-1">
                <span>10 L</span>
                <span>2 Cr</span>
              </div>
            </div>

            <div>
              <label className="block font-body font-medium text-neutral-700 mb-2">
                Interest Rate: {interestRate}% per annum
              </label>
              <input
                type="range"
                min="6"
                max="15"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-neutral-500 mt-1">
                <span>6%</span>
                <span>15%</span>
              </div>
            </div>

            <div>
              <label className="block font-body font-medium text-neutral-700 mb-2">
                Loan Tenure: {loanTenure} years
              </label>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-neutral-500 mt-1">
                <span>5 years</span>
                <span>30 years</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="font-heading font-semibold text-xl text-primary-500 mb-6">
            EMI Breakdown
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-body font-medium text-neutral-700">Monthly EMI</span>
                <div className="flex items-center space-x-1">
                  <IndianRupee className="h-5 w-5 text-accent-600" />
                  <span className="font-heading font-bold text-xl text-accent-600">
                    {Math.round(emi).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 p-4 rounded-lg text-center">
                <p className="font-body text-sm text-neutral-600 mb-1">Principal Amount</p>
                <p className="font-heading font-semibold text-lg text-primary-600">
                  {formatLakhs(loanAmount)}
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="font-body text-sm text-neutral-600 mb-1">Total Interest</p>
                <p className="font-heading font-semibold text-lg text-orange-600">
                  {formatLakhs(totalInterest)}
                </p>
              </div>
            </div>

            <div className="bg-neutral-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-body font-medium text-neutral-700">Total Amount Payable</span>
                <span className="font-heading font-semibold text-lg text-neutral-800">
                  {formatLakhs(totalAmount)}
                </span>
              </div>
            </div>

            {/* Visual Breakdown */}
            <div className="mt-6">
              <p className="font-body font-medium text-neutral-700 mb-3">Payment Breakdown</p>
              <div className="flex rounded-lg overflow-hidden h-4">
                <div
                  className="bg-primary-500"
                  style={{ width: `${(loanAmount / totalAmount) * 100}%` }}
                ></div>
                <div
                  className="bg-orange-500"
                  style={{ width: `${(totalInterest / totalAmount) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary-500 rounded"></div>
                  <span className="text-neutral-600">Principal ({((loanAmount / totalAmount) * 100).toFixed(1)}%)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span className="text-neutral-600">Interest ({((totalInterest / totalAmount) * 100).toFixed(1)}%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="font-body text-sm text-neutral-600 mb-4">
          * This is an indicative calculation. Actual EMI may vary based on processing fees and other charges.
        </p>
      </div>
    </div>
  );
};

export default EMICalculator;