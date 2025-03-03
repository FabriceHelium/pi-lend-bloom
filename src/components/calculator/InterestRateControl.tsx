
import { TrendingUp } from "lucide-react";

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
        <input
          type="range"
          min="0.01"
          max="0.1"
          step="0.005"
          value={interestRate}
          onChange={(e) => setInterestRate(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pi"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1%</span>
          <span>10%</span>
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
        <span className="text-sm text-gray-500">Taux fixé par les prêteurs</span>
        <span className="text-sm font-medium">{(interestRate * 100).toFixed(1)}%</span>
      </div>
    </div>
  );
}
