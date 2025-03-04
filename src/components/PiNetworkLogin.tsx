
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { authenticateWithPi } from "@/utils/piNetworkSDK";
import { useToast } from "@/hooks/use-toast";

export function PiNetworkLogin() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handlePiLogin = async () => {
    setIsLoading(true);
    try {
      const user = await authenticateWithPi();
      if (user) {
        toast({
          title: "Logged in successfully",
          description: `Welcome, ${user.username}!`,
        });
        // Here you would typically store the user in your app's state
        // For example, using React Context or Redux
      } else {
        toast({
          title: "Login failed",
          description: "Could not authenticate with Pi Network",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Pi login error:", error);
      toast({
        title: "Login error",
        description: "An error occurred during authentication",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={handlePiLogin} disabled={isLoading} className="gap-2">
      <img 
        src="https://minepi.com/favicon.ico" 
        alt="Pi" 
        className="w-4 h-4"
      />
      {t("nav.login")}
    </Button>
  );
}

export default PiNetworkLogin;
