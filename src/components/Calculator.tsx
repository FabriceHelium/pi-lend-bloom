
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  CalculatorIcon, 
  TrendingUp, 
  CalendarIcon, 
  PiggyBankIcon,
  ArrowRightIcon,
  RefreshCwIcon
} from "lucide-react";

export type CalculatorMode = "borrow" | "lend";

interface CalculatorProps {
  initialMode?: CalculatorMode;
}

export function Calculator({ initialMode = "borrow" }: CalculatorProps) {
  const [mode, setMode] = useState<CalculatorMode>(initialMode);
  const [amount, setAmount] = useState<number>(1000);
  const [duration, setDuration] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(0.035);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const durationOptions = [
    { value: 7, label: "7 jours" },
    { value: 14, label: "14 jours" },
    { value: 30, label: "30 jours" },
    { value: 90, label: "90 jours" },
    { value: 180, label: "180 jours" },
  ];

  // Calculate interest and total based on inputs
  useEffect(() => {
    // Simple interest calculation
    const interest = amount * interestRate * (duration / 365);
    setTotalInterest(parseFloat(interest.toFixed(2)));
    
    if (mode === "borrow") {
      setTotalAmount(parseFloat((amount + interest).toFixed(2)));
    } else {
      setTotalAmount(parseFloat((amount + interest).toFixed(2)));
    }
  }, [amount, duration, interestRate, mode]);

  return (
    <section id={mode === "borrow" ? "borrow" : "lend"} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-3">
              <CalculatorIcon size={14} />
              <span>Simulateur Pi-Lend</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {mode === "borrow" 
                ? "Calculez votre emprunt Pi en quelques clics" 
                : "Estimez vos gains en prêtant des Pi"}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {mode === "borrow" 
                ? "Obtenez une estimation de votre prêt avec des taux d'intérêt transparents et compétitifs." 
                : "Voyez combien vous pouvez gagner en prêtant vos tokens Pi à la communauté."}
            </p>
          </div>

          <div className="glass-card p-8 md:p-10 rounded-2xl shadow-glass-lg">
            {/* Mode Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full p-1 bg-gray-100">
                <button
                  onClick={() => setMode("borrow")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    mode === "borrow" 
                      ? "bg-white shadow-sm text-pi" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Emprunter
                </button>
                <button
                  onClick={() => setMode("lend")}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    mode === "lend" 
                      ? "bg-white shadow-sm text-pi" 
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Prêter
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium flex items-center gap-1">
                      <PiggyBankIcon size={16} className="text-pi" />
                      {mode === "borrow" ? "Montant à emprunter" : "Montant à prêter"} (π)
                    </label>
                    <span className="text-sm text-gray-500">{amount} π</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={amount}
                    onChange={(e) => setAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pi"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>100 π</span>
                    <span>10 000 π</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium flex items-center gap-1">
                      <CalendarIcon size={16} className="text-pi" />
                      Durée
                    </label>
                    <span className="text-sm text-gray-500">{duration} jours</span>
                  </div>
                  <select 
                    value={duration} 
                    onChange={(e) => setDuration(parseInt(e.target.value))}
                    className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pi/50 bg-white"
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {mode === "lend" && (
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
                )}
                
                {mode === "borrow" && (
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
                )}
              </div>

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
                  onClick={() => {
                    setAmount(1000);
                    setDuration(30);
                    setInterestRate(0.035);
                  }}
                >
                  <RefreshCwIcon size={12} />
                  Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
