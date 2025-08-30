'use client'

import { UserButton } from "@clerk/nextjs";
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import AnalyticsDashboard from '../components/Analytics/AnalyticsDashboard';
import { mockTransactions, mockBudgets } from '../utils/mockData';
import { useState } from 'react';

export default function AnalyticsPage() {
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
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-6 transition-all duration-300">
          <AnalyticsDashboard transactions={mockTransactions} budgets={mockBudgets} />
        </main>
      </div>
    </div>
  );
}
