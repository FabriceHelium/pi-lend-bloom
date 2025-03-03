
import { CalendarIcon } from "lucide-react";
import { durationOptions } from "../../utils/calculatorUtils";

interface DurationControlProps {
  duration: number;
  setDuration: (duration: number) => void;
}

export function DurationControl({ duration, setDuration }: DurationControlProps) {
  return (
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
  );
}
