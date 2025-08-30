'use client';

import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import BalanceCard from './components/Dashboard/BalanceCard';
import QuickActions from './components/Dashboard/QuickActions';
import RecentTransactions from './components/Dashboard/RecentTransactions';
import BudgetProgress from './components/Budget/BudgetProgress';
import AuthForm from './components/Auth/AuthForm';
import MoodTracker from './components/CBT/MoodTracker';
import JournalingTool from './components/CBT/JournalingTool';
import FinancialEducation from './components/Education/FinancialEducation';
import SelfGuidedLearning from './components/Learning/SelfGuidedLearning';
import CommunityHub from './components/Community/CommunityHub';
import ContentLibrary from './components/Library/ContentLibrary';
import CrisisSupport from './components/Crisis/CrisisSupport';
import UserProfile from './components/Profile/UserProfile';
import FinancesDashboard from './components/Finances/FinancesDashboard';
import AnalyticsDashboard from './components/Analytics/AnalyticsDashboard';
import CBTTools from './components/CBT/CBTTools';
import PaymentModal from './components/Payment/PaymentModal';
import { mockTransactions, mockBudgets } from './utils/mockData';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [showBalance, setShowBalance] = useState(true);
  const [user, setUser] = useState({ name: 'Alex Johnson' });
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    type: 'add-funds' | 'send-money' | 'pay-bill';
    amount?: number;
    recipient?: string;
  }>({
    isOpen: false,
    type: 'add-funds'
  });

  const handleAuth = (email: string, password: string, name?: string) => {
    // Mock authentication - in real app, this would call an API
    setUser({ name: name || 'Alex Johnson' });
    setIsAuthenticated(true);
  };

  const handleQuickAction = (action: string, data?: any) => {
    switch (action) {
      case 'add':
        setPaymentModal({ isOpen: true, type: 'add-funds' });
        break;
      case 'send':
        setPaymentModal({ isOpen: true, type: 'send-money' });
        break;
      case 'receive':
        // Show receive money instructions or QR code
        console.log('Show receive money interface');
        break;
      case 'invest':
        setCurrentView('finances');
        break;
      default:
        console.log('Quick action:', action, data);
    }
  };

  if (!isAuthenticated) {
    return (
      <AuthForm
        isLogin={isLoginMode}
        onToggleMode={() => setIsLoginMode(!isLoginMode)}
        onSubmit={handleAuth}
      />
    );
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return (
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
                <button 
                  onClick={() => setCurrentView('cbt-tools')}
                  className="bg-gradient-to-r from-mint-500 to-sage-500 text-white px-4 py-2 rounded-xl hover:from-mint-600 hover:to-sage-600 transition-all duration-300 text-sm font-medium shadow-soft hover:shadow-glow"
                >
                  Start Mood Check-in
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentTransactions
                transactions={mockTransactions}
                onViewAll={() => setCurrentView('finances')}
              />
              <BudgetProgress budgets={mockBudgets} />
            </div>
          </div>
        );
      
      case 'finances':
        return <FinancesDashboard transactions={mockTransactions} budgets={mockBudgets} />;
      
      case 'analytics':
        return <AnalyticsDashboard transactions={mockTransactions} budgets={mockBudgets} />;
      
      case 'cbt-tools':
        return <CBTTools />;
      
      case 'education':
        return <FinancialEducation />;
      
      case 'learning':
        return <SelfGuidedLearning />;
      
      case 'community':
        return <CommunityHub />;
      
      case 'library':
        return <ContentLibrary />;
      
      case 'crisis':
        return <CrisisSupport />;
      
      case 'profile':
        return <UserProfile />;
      
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            </h2>
            <p className="text-gray-600">This section is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-50 via-white to-mint-50">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} user={user} />
      
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          currentView={currentView}
          onViewChange={setCurrentView}
        />
        
        <main className="flex-1 p-6 lg:ml-0 bg-gradient-to-br from-serenity-50/30 to-mint-50/30">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
      
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        type={paymentModal.type}
        amount={paymentModal.amount}
        recipient={paymentModal.recipient}
      />
      
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-serenity-900/20 backdrop-blur-sm lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}