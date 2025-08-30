import React from 'react';
import { ArrowUpRight, ArrowDownLeft, MoreVertical } from 'lucide-react';
import { Transaction } from '../../types';

interface RecentTransactionsProps {
  transactions: Transaction[];
  onViewAll: () => void;
}

export default function RecentTransactions({ transactions, onViewAll }: RecentTransactionsProps) {
  return (
    <div className="serenity-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-serenity-800">Recent Transactions</h3>
        <button
          onClick={onViewAll}
          className="text-serenity-600 hover:text-serenity-700 text-sm font-medium transition-colors"
        >
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {transactions.slice(0, 5).map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-serenity-50/50 transition-all duration-200">
            <div className="flex items-center space-x-3">
              <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center shadow-soft
                ${transaction.type === 'income' 
                  ? 'bg-gradient-to-br from-mint-100 to-sage-100 text-mint-600' 
                  : 'bg-gradient-to-br from-gold-100 to-gold-200 text-gold-700'
                }
              `}>
                {transaction.type === 'income' ? (
                  <ArrowDownLeft className="h-5 w-5" />
                ) : (
                  <ArrowUpRight className="h-5 w-5" />
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {transaction.description}
                </p>
                <p className="text-xs text-sage-500">
                  {transaction.category} • {transaction.date.toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className={`
                font-semibold text-sm
                ${transaction.type === 'income' 
                  ? 'text-mint-600' 
                  : 'text-gold-600'
                }
              `}>
                {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
              </span>
              <button className="p-1 rounded-full hover:bg-serenity-100 transition-colors">
                <MoreVertical className="h-4 w-4 text-sage-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {transactions.length === 0 && (
        <div className="text-center py-8 text-sage-500">
          <p>No transactions yet</p>
          <p className="text-sm">Your transaction history will appear here</p>
        </div>
      )}
    </div>
  );
}