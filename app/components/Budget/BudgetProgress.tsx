import React from 'react';
import { Budget } from '../../types';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface BudgetProgressProps {
  budgets: Budget[];
}

export default function BudgetProgress({ budgets }: BudgetProgressProps) {
  return (
    <div className="serenity-card rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-serenity-800 mb-4">Budget Overview</h3>
      
      <div className="space-y-4">
        {budgets.map((budget) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const remaining = budget.limit - budget.spent;
          const isOverBudget = percentage > 100;
          const isNearLimit = percentage > 80;
          
          return (
            <div key={budget.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-serenity-800">
                    {budget.category}
                  </span>
                  {isOverBudget ? (
                    <AlertCircle className="h-4 w-4 text-red-400" />
                  ) : percentage >= 100 ? (
                    <CheckCircle className="h-4 w-4 text-mint-500" />
                  ) : null}
                </div>
                <span className="text-sm text-sage-500">
                  ${budget.spent.toFixed(2)} / ${budget.limit.toFixed(2)}
                </span>
              </div>
              
              <div className="w-full bg-serenity-100 rounded-full h-2">
                <div
                  className={`
                    h-2 rounded-full transition-all duration-300
                    ${isOverBudget 
                      ? 'bg-gradient-to-r from-red-400 to-red-500' 
                      : isNearLimit 
                        ? 'bg-gradient-to-r from-gold-400 to-gold-500' 
                        : 'bg-gradient-to-r from-mint-400 to-sage-500'
                    }
                  `}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs">
                <span className={
                  remaining < 0 
                    ? 'text-red-500 font-medium' 
                    : isNearLimit 
                      ? 'text-gold-600' 
                      : 'text-sage-500'
                }>
                  {remaining < 0 
                    ? `Over budget by $${Math.abs(remaining).toFixed(2)}` 
                    : `$${remaining.toFixed(2)} remaining`
                  }
                </span>
                <span className="text-sage-400">
                  {percentage.toFixed(1)}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}