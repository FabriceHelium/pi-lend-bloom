
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Lock, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 right-20 w-72 h-72 bg-pi/5 rounded-full filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-60 left-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center pt-20 pb-16">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium mb-2">
              Écosystème Pi Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Microcrédit accessible et <span className="text-gradient">sécurisé</span> avec Pi
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Prêtez ou empruntez des tokens Pi avec des taux d'intérêt compétitifs. Une solution transparente et automatisée par la blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Button size="lg" className="rounded-full bg-gradient-primary hover:opacity-90 px-6">
                Commencer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-6">
                En savoir plus
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-pi">0%</p>
                <p className="text-sm text-gray-500">Frais cachés</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-pi">100%</p>
                <p className="text-sm text-gray-500">Transparence</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-pi">24/7</p>
                <p className="text-sm text-gray-500">Disponibilité</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="glass-card p-8 rounded-2xl shadow-glass-lg max-w-md mx-auto w-full relative z-10 animate-float">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-1">Calculateur de prêt</h3>
                <p className="text-sm text-gray-500">Estimez votre prêt en quelques clics</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Montant (π)</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pi/50"
                      placeholder="1000"
                    />
                    <span className="absolute right-4 top-3.5 text-gray-400">π</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Durée du prêt</label>
                  <select className="w-full rounded-lg px-4 py-3 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pi/50 bg-white">
                    <option>7 jours</option>
                    <option>14 jours</option>
                    <option>30 jours</option>
                    <option>90 jours</option>
                  </select>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Taux d'intérêt</span>
                    <span className="text-sm font-medium">3.5%</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-500">Intérêts</span>
                    <span className="text-sm font-medium">35 π</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="text-sm font-medium">Total à rembourser</span>
                    <span className="text-base font-bold text-pi">1035 π</span>
                  </div>
                </div>
                
                <Button className="w-full rounded-full bg-gradient-primary hover:opacity-90">
                  Demander un prêt
                </Button>
                
                <div className="flex justify-center gap-4 text-xs text-gray-500 mt-2">
                  <div className="flex items-center">
                    <Lock className="h-3 w-3 mr-1 text-pi" />
                    <span>Sécurisé</span>
                  </div>
                  <div className="flex items-center">
                    <ShieldCheck className="h-3 w-3 mr-1 text-pi" />
                    <span>Transparent</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-gradient-to-br from-blue-200 to-purple-100 rounded-full opacity-80 blur-xl"></div>
            <div className="absolute -top-4 -left-4 h-24 w-24 bg-gradient-to-br from-blue-100 to-purple-200 rounded-full opacity-80 blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
