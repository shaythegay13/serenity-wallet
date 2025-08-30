'use client'

import { UserButton } from "@clerk/nextjs";
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import FinancesDashboard from '../components/Finances/FinancesDashboard';
import { mockTransactions, mockBudgets } from '../utils/mockData';
import { useState } from 'react';

export default function FinancesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: 'User' });

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
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        currentView="finances"
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          currentView="finances"
        />
        
        <main className="flex-1 p-6 transition-all duration-300">
          <FinancesDashboard transactions={mockTransactions} budgets={mockBudgets} />
        </main>
      </div>
    </div>
  );
}
