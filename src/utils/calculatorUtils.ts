
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
