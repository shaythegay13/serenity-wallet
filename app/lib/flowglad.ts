import FlowgladSDK from '@flowglad/react/server';

// Initialize Flowglad SDK with production configuration
export const flowgladClient = new FlowgladSDK({
  apiKey: process.env.NEXT_PUBLIC_FLOWGLAD_API_KEY,
  environment: process.env.NEXT_PUBLIC_FLOWGLAD_ENVIRONMENT || 'production'
});

// Payment processing utilities
export const processPayment = async (paymentData: {
  amount: number;
  currency: string;
  description: string;
  customerEmail?: string;
}) => {
  try {
    const response = await flowgladClient.payments.create({
      amount: paymentData.amount,
      currency: paymentData.currency,
      description: paymentData.description,
      customer_email: paymentData.customerEmail
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Payment processing error:', error);
    return { success: false, error };
  }
};

// Wallet operations
export const addFunds = async (amount: number, paymentMethod: string) => {
  try {
    const response = await flowgladClient.wallet.addFunds({
      amount,
      payment_method: paymentMethod
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Add funds error:', error);
    return { success: false, error };
  }
};

// Transfer operations
export const transferFunds = async (recipientEmail: string, amount: number, description?: string) => {
  try {
    const response = await flowgladClient.transfers.create({
      recipient_email: recipientEmail,
      amount,
      description
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Transfer error:', error);
    return { success: false, error };
  }
};

// Get transaction history
export const getTransactionHistory = async () => {
  try {
    const response = await flowgladClient.transactions.list();
    return { success: true, data: response };
  } catch (error) {
    console.error('Transaction history error:', error);
    return { success: false, error };
  }
};