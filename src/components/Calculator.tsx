
import { useState, useEffect } from "react";
import { CalculatorIcon } from "lucide-react";
import { ModeToggle } from "./calculator/ModeToggle";
import { AmountControl } from "./calculator/AmountControl";
import { DurationControl } from "./calculator/DurationControl";
import { InterestRateControl } from "./calculator/InterestRateControl";
import { ResultsSummary } from "./calculator/ResultsSummary";
import { calculateLoanDetails } from "../utils/calculatorUtils";

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

  // Reset calculator to default values
  const resetCalculator = () => {
    setAmount(1000);
    setDuration(30);
    setInterestRate(0.035);
  };

  // Calculate interest and total based on inputs
  useEffect(() => {
    const { totalInterest, totalAmount } = calculateLoanDetails(
      amount,
      duration,
      interestRate,
      mode
    );
    
    setTotalInterest(totalInterest);
    setTotalAmount(totalAmount);
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
            <ModeToggle mode={mode} setMode={setMode} />

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <AmountControl 
                  amount={amount} 
                  setAmount={setAmount} 
                  mode={mode} 
                />

                <DurationControl 
                  duration={duration} 
                  setDuration={setDuration} 
                />

                <InterestRateControl 
                  interestRate={interestRate}
                  setInterestRate={setInterestRate}
                  mode={mode}
                />
              </div>

              <ResultsSummary
                mode={mode}
                amount={amount}
                duration={duration}
                interestRate={interestRate}
                totalInterest={totalInterest}
                totalAmount={totalAmount}
                resetCalculator={resetCalculator}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
