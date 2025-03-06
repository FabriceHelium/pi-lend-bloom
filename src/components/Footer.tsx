
import { Github, Twitter, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pi to-pi-light flex items-center justify-center text-white font-bold text-xl mr-2">
                π
              </div>
              <span className="text-xl font-semibold">{t("app.title")}</span>
            </a>
            <p className="text-gray-600 mb-4">
              {t("app.subtitle")}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pi transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pi transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pi transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pi transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Produits</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Microcrédit</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Prêts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Épargne</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Communauté</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Carrières</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Partenaires</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Sécurité</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pi transition-colors">Communauté</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {t("app.title")}. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-pi text-sm transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-500 hover:text-pi text-sm transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-gray-500 hover:text-pi text-sm transition-colors">
              Légal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

