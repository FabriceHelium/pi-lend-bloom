
import { PiggyBank, ArrowUpRight, ArrowDownRight, ActivityIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function UserStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la <span className="text-gradient">Révolution</span> du Microcrédit
          </h2>
          <p className="text-lg text-gray-600">
            Devenez membre d'une communauté en pleine croissance qui change la façon dont nous prêtons et empruntons
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-card glass-card-hover border-0">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center text-sm">
                <ActivityIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                Utilisateurs actifs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-3xl font-bold">5,230+</CardTitle>
                <p className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+12% ce mois</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card glass-card-hover border-0">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center text-sm">
                <PiggyBank className="mr-1 h-4 w-4 text-muted-foreground" />
                Pi prêtés
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-3xl font-bold">158,450 π</CardTitle>
                <p className="text-sm text-green-600 flex items-center">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  <span>+23% ce mois</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card glass-card-hover border-0">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center text-sm">
                <ArrowDownRight className="mr-1 h-4 w-4 text-muted-foreground" />
                Taux de défaut
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-3xl font-bold">0.8%</CardTitle>
                <p className="text-sm text-green-600 flex items-center">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  <span>-0.2% ce mois</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card glass-card-hover border-0">
            <CardHeader className="pb-2">
              <CardDescription className="flex items-center text-sm">
                <ArrowUpRight className="mr-1 h-4 w-4 text-muted-foreground" />
                Taux moyen
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-1">
                <CardTitle className="text-3xl font-bold">3.5%</CardTitle>
                <p className="text-sm text-muted-foreground flex items-center">
                  Stable depuis 30 jours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default UserStats;
