
interface PiNetworkSDK {
  init(options: { version: string; sandbox?: boolean }): void;
  authenticate(
    onIncompletePaymentFound: (payment: any) => void,
    onCancel: () => void
  ): Promise<{
    uid: string;
    username: string;
    accessToken: string;
  } | null>;
  createPayment(paymentData: {
    amount: number;
    memo: string;
    metadata?: Record<string, any>;
    to?: string;
  }): Promise<any>;
}

declare global {
  interface Window {
    Pi?: PiNetworkSDK;
  }
}

export {};
