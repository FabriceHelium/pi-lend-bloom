
import { Shield, Zap, TrendingUp, LineChart, Users, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Features() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Shield,
      title: t("features.feature1_title"),
      description: t("features.feature1_desc")
    },
    {
      icon: Zap,
      title: t("features.feature2_title"),
      description: t("features.feature2_desc")
    },
    {
      icon: TrendingUp,
      title: t("features.feature3_title"),
      description: t("features.feature3_desc")
    },
    {
      icon: LineChart,
      title: "Transparence Totale",
      description: "Historique immuable des transactions et conditions claires visibles par tous."
    },
    {
      icon: Users,
      title: "Communauté Pi",
      description: "Renforcement de l'écosystème Pi Network en augmentant l'utilité des tokens."
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Accès à vos fonds et gestion de vos prêts à tout moment, sans interruption."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("features.title")} <span className="text-gradient">{t("features.subtitle")}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card glass-card-hover p-6 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pi/20 to-pi-light/20 group-hover:from-pi group-hover:to-pi-light transition-colors duration-300"></div>
              <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-accent text-pi">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

