
import { CalculatorMode } from "../Calculator";

interface ModeToggleProps {
  mode: CalculatorMode;
  setMode: (mode: CalculatorMode) => void;
}

export function ModeToggle({ mode, setMode }: ModeToggleProps) {
  return (
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
  );
}
