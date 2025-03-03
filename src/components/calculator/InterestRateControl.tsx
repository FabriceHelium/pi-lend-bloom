
import { TrendingUp } from "lucide-react";
import { BORROWER_FIXED_INTEREST_RATE } from "../../utils/calculatorUtils";

interface InterestRateControlProps {
  interestRate: number;
  setInterestRate: (rate: number) => void;
  mode: "borrow" | "lend";
}

export function InterestRateControl({ 
  interestRate, 
  setInterestRate, 
  mode 
}: InterestRateControlProps) {
  
  if (mode === "lend") {
    return (
      <div className="space-y-3">
        <div className="flex justify-between">
          <label className="text-sm font-medium flex items-center gap-1">
            <TrendingUp size={16} className="text-pi" />
            Taux d'intérêt annuel
          </label>
          <span className="text-sm text-gray-500">{(interestRate * 100).toFixed(1)}%</span>
        </div>
        <div className="w-full h-10 px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg flex items-center justify-between">
          <span className="text-sm text-gray-500">Taux basé sur le montant du prêt</span>
          <span className="text-sm font-medium">{(interestRate * 100).toFixed(1)}%</span>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span>Min: 1%</span>
          <span>Max: 10%</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      <div className="flex justify-between">
        <label className="text-sm font-medium flex items-center gap-1">
          <TrendingUp size={16} className="text-pi" />
          Taux d'intérêt annuel
        </label>
        <span className="text-sm text-gray-500">{(interestRate * 100).toFixed(1)}%</span>
      </div>
      <div className="w-full h-10 px-4 py-3 border border-gray-200 bg-gray-50 rounded-lg flex items-center justify-between">
        <span className="text-sm text-gray-500">Taux fixé par l'administrateur</span>
        <span className="text-sm font-medium">{(interestRate * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}
