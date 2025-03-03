
import { PiggyBankIcon } from "lucide-react";

interface AmountControlProps {
  amount: number;
  setAmount: (amount: number) => void;
  mode: "borrow" | "lend";
}

export function AmountControl({ amount, setAmount, mode }: AmountControlProps) {
  return (
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
  );
}
