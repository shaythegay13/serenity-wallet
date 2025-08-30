'use client'

import { UserButton } from "@clerk/nextjs";
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import BalanceCard from '../components/Dashboard/BalanceCard';
import QuickActions from '../components/Dashboard/QuickActions';
import RecentTransactions from '../components/Dashboard/RecentTransactions';
import BudgetProgress from '../components/Budget/BudgetProgress';
import { mockTransactions, mockBudgets } from '../utils/mockData';
import { useState } from 'react';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showBalance, setShowBalance] = useState(true);
  const [user, setUser] = useState({ name: 'User' });

  const handleQuickAction = (action: string) => {
    console.log('Quick action:', action);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-50 via-white to-mint-50">
      <div className="flex justify-end p-4">
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10 rounded-full",
              userButtonPopoverCard: "bg-white/90 backdrop-blur-md rounded-2xl shadow-glow border border-white/20"
            }
          }}
        />
      </div>
      
      <Header 
        user={user}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-6 transition-all duration-300">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <BalanceCard
                balance={12456.78}
                monthlyChange={234.56}
                showBalance={showBalance}
                onToggleVisibility={() => setShowBalance(!showBalance)}
              />
              <QuickActions onAction={handleQuickAction} />
              <div className="bg-gradient-to-br from-mint-50 to-serenity-50 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
                <h3 className="text-lg font-semibold text-serenity-800 mb-3">Welcome Back!</h3>
                <p className="text-sage-600 text-sm mb-4">
                  Take a moment to check in with your financial wellness. How are you feeling about your money today?
                </p>
                <a 
                  href="/cbt-tools"
                  className="inline-block bg-gradient-to-r from-mint-500 to-sage-500 text-white px-4 py-2 rounded-xl hover:from-mint-600 hover:to-sage-600 transition-all duration-300 text-sm font-medium shadow-soft hover:shadow-glow"
                >
                  Start Mood Check-in
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentTransactions
                transactions={mockTransactions}
                onViewAll={() => window.location.href = '/finances'}
              />
              <BudgetProgress budgets={mockBudgets} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
