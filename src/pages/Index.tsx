
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Calculator from "@/components/Calculator";
import UserStats from "@/components/UserStats";
import Footer from "@/components/Footer";
import LoanCard from "@/components/LoanCard";

const Index = () => {
  const lendingOpportunities = [
    {
      type: "offer" as const,
      amount: 2500,
      duration: 30,
      interestRate: 0.035,
      lender: "Pi_User1234",
      status: "open" as const
    },
    {
      type: "offer" as const,
      amount: 5000,
      duration: 90,
      interestRate: 0.042,
      lender: "LendMaster_Pi",
      status: "open" as const
    },
    {
      type: "offer" as const,
      amount: 1000,
      duration: 14,
      interestRate: 0.028,
      lender: "PiInvestor",
      status: "open" as const
    }
  ];
  
  const borrowingOpportunities = [
    {
      type: "opportunity" as const,
      amount: 1500,
      duration: 30,
      interestRate: 0.032,
      collateralRequired: 375,
      borrower: "Pi_Explorer",
      status: "open" as const
    },
    {
      type: "opportunity" as const,
      amount: 3000,
      duration: 60,
      interestRate: 0.038,
      collateralRequired: 900,
      borrower: "PiNetwork_User",
      status: "open" as const
    },
    {
      type: "opportunity" as const,
      amount: 800,
      duration: 7,
      interestRate: 0.025,
      collateralRequired: 240,
      borrower: "PiBusiness",
      status: "open" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        <Calculator initialMode="borrow" />
        
        <UserStats />
        
        {/* Lending opportunities section */}
        <section id="lend" className="py-20 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dernières <span className="text-gradient">Opportunités</span>
              </h2>
              <p className="text-lg text-gray-600">
                Découvrez les offres de prêt et d'emprunt les plus récentes sur la plateforme
              </p>
            </div>
            
            <div className="grid gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-pi/10 flex items-center justify-center text-pi mr-2">→</span> 
                  Opportunités de prêt
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {lendingOpportunities.map((loan, index) => (
                    <LoanCard key={`lending-${index}`} {...loan} />
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <span className="h-8 w-8 rounded-full bg-pi/10 flex items-center justify-center text-pi mr-2">←</span>
                  Opportunités d'emprunt
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {borrowingOpportunities.map((loan, index) => (
                    <LoanCard key={`borrowing-${index}`} {...loan} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
