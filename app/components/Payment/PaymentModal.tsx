import React, { useState } from 'react';
import { X, CreditCard, DollarSign, Lock, CheckCircle } from 'lucide-react';
import { processPayment, addFunds } from '../../lib/flowglad';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'add-funds' | 'send-money' | 'pay-bill';
  amount?: number;
  recipient?: string;
}

export default function PaymentModal({ isOpen, onClose, type, amount: initialAmount, recipient }: PaymentModalProps) {
  const [amount, setAmount] = useState(initialAmount || 0);
  const [recipientEmail, setRecipientEmail] = useState(recipient || '');
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const getTitle = () => {
    switch (type) {
      case 'add-funds': return 'Add Funds to Wallet';
      case 'send-money': return 'Send Money';
      case 'pay-bill': return 'Pay Bill';
      default: return 'Payment';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      let result;
      
      if (type === 'add-funds') {
        result = await addFunds(amount, paymentMethod);
      } else {
        result = await processPayment({
          amount,
          currency: 'USD',
          description: description || `${type} - ${amount}`,
          customerEmail: recipientEmail
        });
      }

      if (result.success) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setAmount(0);
          setRecipientEmail('');
          setDescription('');
        }, 2000);
      }
    } catch (error) {
      console.error('Payment error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-8 max-w-md w-full border border-emerald-200/50 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-emerald-800 mb-2">Payment Successful!</h3>
            <p className="text-emerald-600">Your transaction has been processed successfully.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-white to-serenity-50 rounded-3xl p-8 max-w-md w-full border border-serenity-200/50 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-serenity-800">{getTitle()}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-serenity-100 transition-colors"
          >
            <X className="h-5 w-5 text-serenity-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-serenity-700 mb-3">
              Amount
            </label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-serenity-400" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-white/80 border border-serenity-200 rounded-xl px-10 py-3 focus:ring-2 focus:ring-serenity-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              />
            </div>
          </div>

          {type === 'send-money' && (
            <div>
              <label className="block text-sm font-semibold text-serenity-700 mb-3">
                Recipient Email
              </label>
              <input
                type="email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full bg-white/80 border border-serenity-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-serenity-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="recipient@email.com"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-serenity-700 mb-3">
              Description (Optional)
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white/80 border border-serenity-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-serenity-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              placeholder="What's this payment for?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-serenity-700 mb-3">
              Payment Method
            </label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full bg-white/80 border border-serenity-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-serenity-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="bank">Bank Transfer</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
          </div>

          <div className="bg-gradient-to-br from-serenity-50 to-mint-50 rounded-2xl p-4 border border-serenity-200/50">
            <div className="flex items-center space-x-2 text-serenity-700">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">Secured by Flowglad Payment Processing</span>
            </div>
            <p className="text-xs text-serenity-600 mt-1">
              Your payment information is encrypted and secure.
            </p>
          </div>

          <button
            type="submit"
            disabled={isProcessing || amount <= 0}
            className="w-full bg-gradient-to-r from-serenity-500 to-mint-500 text-white font-semibold py-4 rounded-xl hover:from-serenity-600 hover:to-mint-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="h-5 w-5 mr-2" />
                {type === 'add-funds' ? `Add $${amount}` : `Send $${amount}`}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}