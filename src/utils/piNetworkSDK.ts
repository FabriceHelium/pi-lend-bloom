
// Pi Network SDK utility functions

export type PiUser = {
  uid: string;
  username: string;
  accessToken: string;
};

// Initialize Pi SDK
export const initPiNetwork = () => {
  if (window.Pi) {
    window.Pi.init({ version: "2.0", sandbox: true });
    console.log("Pi Network SDK initialized");
  } else {
    console.error("Pi Network SDK not loaded");
  }
};

// Authenticate user with Pi Network
export const authenticateWithPi = async (): Promise<PiUser | null> => {
  if (!window.Pi) {
    console.error("Pi Network SDK not loaded");
    return null;
  }

  try {
    const authResponse = await window.Pi.authenticate(
      (user: PiUser) => user,
      () => null
    );
    
    if (authResponse) {
      console.log("User authenticated with Pi Network:", authResponse);
      return authResponse;
    }
    
    return null;
  } catch (error) {
    console.error("Error authenticating with Pi Network:", error);
    return null;
  }
};

// Create a payment with Pi Network
export const createPiPayment = async (
  amount: number,
  memo: string,
  metadata: Record<string, any> = {}
) => {
  if (!window.Pi) {
    console.error("Pi Network SDK not loaded");
    return null;
  }

  try {
    const payment = await window.Pi.createPayment({
      amount,
      memo,
      metadata
    });
    
    console.log("Payment created:", payment);
    return payment;
  } catch (error) {
    console.error("Error creating payment:", error);
    return null;
  }
};
