import React from 'react';
import { Send, Plus, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

interface QuickActionsProps {
  onAction: (action: string, data?: any) => void;
}

const actions = [
  { id: 'send', label: 'Send', icon: Send, color: 'bg-gradient-to-br from-serenity-500 to-serenity-600 hover:from-serenity-600 hover:to-serenity-700' },
  { id: 'receive', label: 'Receive', icon: ArrowDownLeft, color: 'bg-gradient-to-br from-mint-500 to-sage-500 hover:from-mint-600 hover:to-sage-600' },
  { id: 'add', label: 'Add Funds', icon: Plus, color: 'bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700' },
  { id: 'invest', label: 'Invest', icon: ArrowUpRight, color: 'bg-gradient-to-br from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700' },
];

export default function QuickActions({ onAction }: QuickActionsProps) {
  return (
    <div className="serenity-card rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-serenity-800 mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          
          return (
            <button
              key={action.id}
              onClick={() => onAction(action.id)}
              className={`
                ${action.color} text-white rounded-lg p-4 
                flex flex-col items-center space-y-2 
                transition-all duration-300 hover:scale-105 hover:shadow-glow
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-serenity-300
              `}
            >
              <Icon className="h-6 w-6" />
              <span className="text-sm font-medium">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}