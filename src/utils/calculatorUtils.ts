
// Calculate interest and total amount based on inputs
export const calculateLoanDetails = (
  amount: number,
  duration: number,
  interestRate: number,
  mode: "borrow" | "lend"
) => {
  // Simple interest calculation
  const interest = amount * interestRate * (duration / 365);
  const totalInterest = parseFloat(interest.toFixed(2));
  const totalAmount = parseFloat((amount + interest).toFixed(2));

  return {
    totalInterest,
    totalAmount
  };
};

export const durationOptions = [
  { value: 7, label: "7 jours" },
  { value: 14, label: "14 jours" },
  { value: 30, label: "30 jours" },
  { value: 90, label: "90 jours" },
  { value: 180, label: "180 jours" },
];

// Fixed interest rate for borrowers (admin defined)
export const BORROWER_FIXED_INTEREST_RATE = 0.035; // 3.5%

// Calculate lender interest rate based on amount
// The rate increases with amount up to 10% at 10000π
export const calculateLenderInterestRate = (amount: number): number => {
  // Minimum rate: 1% (0.01)
  // Maximum rate: 10% (0.1)
  const minRate = 0.01;
  const maxRate = 0.1;
  const minAmount = 100;
  const maxAmount = 10000;
  
  // Linear scale calculation
  const rate = minRate + ((amount - minAmount) / (maxAmount - minAmount)) * (maxRate - minRate);
  
  // Ensure rate stays within the valid range
  return Math.min(Math.max(rate, minRate), maxRate);
};
