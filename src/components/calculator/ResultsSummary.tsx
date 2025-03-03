
import { ArrowRightIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalculatorMode } from "../Calculator";

interface ResultsSummaryProps {
  mode: CalculatorMode;
  amount: number;
  duration: number;
  interestRate: number;
  totalInterest: number;
  totalAmount: number;
  resetCalculator: () => void;
}

export function ResultsSummary({
  mode,
  amount,
  duration,
  interestRate,
  totalInterest,
  totalAmount,
  resetCalculator
}: ResultsSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl flex flex-col">
      <h3 className="text-lg font-medium mb-6">
        {mode === "borrow" ? "Résumé de l'emprunt" : "Résumé du prêt"}
      </h3>
      
      <div className="space-y-4 mb-6 flex-grow">
        <div className="flex justify-between">
          <span className="text-gray-500">
            {mode === "borrow" ? "Montant demandé" : "Montant prêté"}
          </span>
          <span className="font-medium">{amount} π</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Durée</span>
          <span className="font-medium">{duration} jours</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Taux d'intérêt</span>
          <span className="font-medium">{(interestRate * 100).toFixed(1)}%</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Intérêts</span>
          <span className="font-medium text-pi">{totalInterest} π</span>
        </div>
        <div className="pt-4 mt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="font-medium">
              {mode === "borrow" ? "Total à rembourser" : "Total à recevoir"}
            </span>
            <span className="text-xl font-bold text-pi">{totalAmount} π</span>
          </div>
        </div>
      </div>
      
      <Button className="w-full rounded-full bg-gradient-primary hover:opacity-90">
        {mode === "borrow" ? (
          <>
            Demander un prêt
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </>
        ) : (
          <>
            Prêter mes Pi
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      
      <button 
        className="mt-3 text-xs text-gray-500 flex items-center justify-center gap-1 hover:text-pi transition-colors"
        onClick={resetCalculator}
      >
        <RefreshCwIcon size={12} />
        Réinitialiser
      </button>
    </div>
  );
}
