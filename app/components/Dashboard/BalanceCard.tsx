import React from 'react';
import { Eye, EyeOff, TrendingUp, TrendingDown } from 'lucide-react';

interface BalanceCardProps {
  balance: number;
  monthlyChange: number;
  showBalance: boolean;
  onToggleVisibility: () => void;
}

export default function BalanceCard({ 
  balance, 
  monthlyChange, 
  showBalance, 
  onToggleVisibility 
}: BalanceCardProps) {
  const isPositiveChange = monthlyChange >= 0;
  
  return (
    <div className="serenity-gradient rounded-2xl p-6 text-white relative overflow-hidden shadow-glow">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/20 rounded-full -translate-y-16 translate-x-16"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-serenity-100 font-medium">Total Balance</h3>
          <button
            onClick={onToggleVisibility}
            className="p-2 rounded-xl hover:bg-white/20 transition-all duration-200"
          >
            {showBalance ? (
              <Eye className="h-4 w-4 text-serenity-100" />
            ) : (
              <EyeOff className="h-4 w-4 text-serenity-100" />
            )}
          </button>
        </div>
        
        <div className="mb-4">
          <span className="text-3xl font-bold tracking-tight">
            {showBalance ? `$${balance.toLocaleString()}` : '••••••'}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {isPositiveChange ? (
            <TrendingUp className="h-4 w-4 text-mint-300" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-300" />
          )}
          <span className={`text-sm font-medium ${
            isPositiveChange ? 'text-mint-300' : 'text-red-300'
          }`}>
            {isPositiveChange ? '+' : ''}${monthlyChange.toFixed(2)} this month
          </span>
        </div>
      </div>
    </div>
  );
}