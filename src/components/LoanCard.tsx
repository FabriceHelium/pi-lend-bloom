
import { CreditCard, Clock, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export interface LoanCardProps {
  type: "offer" | "opportunity";
  amount: number;
  duration: number;
  interestRate: number;
  collateralRequired?: number;
  lender?: string;
  borrower?: string;
  status?: "active" | "completed" | "open";
}

export function LoanCard({
  type,
  amount,
  duration,
  interestRate,
  collateralRequired,
  lender,
  borrower,
  status = "open"
}: LoanCardProps) {
  const { t } = useTranslation();
  const isOffer = type === "offer";
  
  const statusColors = {
    open: "bg-green-100 text-green-800",
    active: "bg-blue-100 text-blue-800",
    completed: "bg-gray-100 text-gray-800"
  };

  return (
    <div className="glass-card glass-card-hover p-6 rounded-xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-pi mr-3">
            <CreditCard size={20} />
          </div>
          <div>
            <h3 className="font-medium">
              {isOffer ? "Offre de prêt" : "Opportunité d'emprunt"}
            </h3>
            <p className="text-sm text-gray-500">
              {isOffer ? "Proposée par un prêteur" : "Demandée par un emprunteur"}
            </p>
          </div>
        </div>
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
            {status === "open" ? t("opportunities.open") : status === "active" ? "En cours" : "Terminé"}
          </span>
        )}
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 text-sm">{t("opportunities.amount")}</span>
          <span className="font-semibold">{amount} π</span>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 text-sm">{t("opportunities.duration")}</span>
          <div className="flex items-center">
            <Clock size={14} className="text-gray-400 mr-1" />
            <span className="font-semibold">{duration} {t("opportunities.days")}</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <span className="text-gray-500 text-sm">{t("opportunities.interest")}</span>
          <span className="font-semibold text-pi">{(interestRate * 100).toFixed(1)}%</span>
        </div>
        {collateralRequired && (
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">{t("opportunities.collateral")}</span>
            <span className="font-semibold">{collateralRequired} π</span>
          </div>
        )}
        {(lender || borrower) && (
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-gray-500 text-sm">{isOffer ? "Prêteur" : "Emprunteur"}</span>
            <div className="flex items-center">
              <User size={14} className="text-gray-400 mr-1" />
              <span className="font-semibold">{isOffer ? lender : borrower}</span>
            </div>
          </div>
        )}
      </div>
      
      <Button 
        className="w-full justify-between rounded-lg bg-gradient-primary hover:opacity-90"
      >
        {isOffer ? t("opportunities.action_borrow") : "Voir les détails"}
        <ChevronRight size={16} />
      </Button>
    </div>
  );
}

export default LoanCard;

