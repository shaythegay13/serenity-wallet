import React from 'react';
import { Transaction } from '../../types';

interface SpendingChartProps {
  transactions: Transaction[];
}

export default function SpendingChart({ transactions }: SpendingChartProps) {
  // Calculate spending by category
  const categorySpending = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      acc[transaction.category] = (acc[transaction.category] || 0) + transaction.amount;
      return acc;
    }, {} as Record<string, number>);

  const categories = Object.entries(categorySpending)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  const maxAmount = Math.max(...categories.map(([,amount]) => amount));

  const colors = [
    'bg-gradient-to-r from-serenity-500 to-serenity-600',
    'bg-gradient-to-r from-mint-500 to-sage-500',
    'bg-gradient-to-r from-sage-500 to-mint-600',
    'bg-gradient-to-r from-gold-500 to-gold-600',
    'bg-gradient-to-r from-serenity-400 to-mint-500'
  ];

  return (
    <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Top Spending Categories
      </h3>
      
      <div className="space-y-4">
        {categories.map(([category, amount], index) => {
          const percentage = (amount / maxAmount) * 100;
          
          return (
            <div key={category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  {category}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  ${amount.toFixed(2)}
                </span>
              </div>
              
              <div className="w-full bg-serenity-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${colors[index]} shadow-soft`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      
      {categories.length === 0 && (
        <div className="text-center py-8 text-sage-500">
          <p>No spending data available</p>
          <p className="text-sm">Make some transactions to see your spending patterns</p>
        </div>
      )}
    </div>
  );
}