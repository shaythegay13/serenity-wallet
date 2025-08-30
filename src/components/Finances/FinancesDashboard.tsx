import React, { useState } from 'react';
import { CreditCard, Target, PieChart, Plus, ArrowUpRight, ArrowDownLeft, TrendingUp, TrendingDown, MoreVertical, AlertCircle, CheckCircle, DollarSign, Eye, EyeOff } from 'lucide-react';
import { Transaction, Budget } from '../../types';

interface FinancesDashboardProps {
  transactions: Transaction[];
  budgets: Budget[];
}

interface Investment {
  id: string;
  symbol: string;
  name: string;
  shares: number;
  currentPrice: number;
  purchasePrice: number;
  value: number;
  change: number;
  changePercent: number;
}

export default function FinancesDashboard({ transactions, budgets }: FinancesDashboardProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showBalance, setShowBalance] = useState(true);
  
  const investments: Investment[] = [
    {
      id: '1',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 10,
      currentPrice: 185.50,
      purchasePrice: 175.00,
      value: 1855.00,
      change: 105.00,
      changePercent: 6.0
    },
    {
      id: '2',
      symbol: 'VTSAX',
      name: 'Vanguard Total Stock Market',
      shares: 25,
      currentPrice: 112.30,
      purchasePrice: 108.50,
      value: 2807.50,
      change: 95.00,
      changePercent: 3.5
    },
    {
      id: '3',
      symbol: 'BTC',
      name: 'Bitcoin',
      shares: 0.1,
      currentPrice: 45000,
      purchasePrice: 42000,
      value: 4500.00,
      change: 300.00,
      changePercent: 7.1
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'transactions', label: 'Transactions' },
    { id: 'budgets', label: 'Budgets' },
    { id: 'investments', label: 'Investments' }
  ];

  const totalInvestmentValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalInvestmentChange = investments.reduce((sum, inv) => sum + inv.change, 0);
  const walletBalance = 12456.78;
  const totalWealth = walletBalance + totalInvestmentValue;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-serenity-50 to-mint-50 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Financial Overview</h2>
        <p className="text-gray-600 mb-6">
          Manage your wallet, track spending, monitor budgets, and view investment performance.
        </p>
        
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`
                flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
                ${selectedTab === tab.id
                  ? 'bg-white text-serenity-600 shadow-soft'
                  : 'text-sage-600 hover:text-sage-900'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {selectedTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-blue-100 font-medium">Wallet Balance</h3>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                </button>
              </div>
              <div className="text-3xl font-bold mb-2">
                {showBalance ? `$${walletBalance.toLocaleString()}` : '••••••'}
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-300" />
                <span className="text-sm text-green-300">+$234.56 this month</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mint-500 to-sage-600 rounded-2xl p-6 text-white shadow-glow">
              <h3 className="text-mint-100 font-medium mb-4">Investment Portfolio</h3>
              <div className="text-3xl font-bold mb-2">
                ${totalInvestmentValue.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-mint-300" />
                <span className="text-sm text-mint-300">
                  +${totalInvestmentChange.toFixed(2)} total gain
                </span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-6 text-white shadow-glow">
              <h3 className="text-gold-100 font-medium mb-4">Total Wealth</h3>
              <div className="text-3xl font-bold mb-2">
                ${totalWealth.toLocaleString()}
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-gold-300" />
                <span className="text-sm text-gold-300">+8.2% this quarter</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gradient-to-br from-serenity-500 to-serenity-600 hover:from-serenity-600 hover:to-serenity-700 text-white rounded-xl p-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105 shadow-soft">
                  <Plus className="h-6 w-6" />
                  <span className="text-sm font-medium">Add Funds</span>
                </button>
                <button className="bg-gradient-to-br from-mint-500 to-sage-500 hover:from-mint-600 hover:to-sage-600 text-white rounded-xl p-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105 shadow-soft">
                  <ArrowDownLeft className="h-6 w-6" />
                  <span className="text-sm font-medium">Receive</span>
                </button>
                <button className="bg-gradient-to-br from-sage-500 to-mint-600 hover:from-sage-600 hover:to-mint-700 text-white rounded-xl p-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105 shadow-soft">
                  <ArrowUpRight className="h-6 w-6" />
                  <span className="text-sm font-medium">Send</span>
                </button>
                <button className="bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-xl p-4 flex flex-col items-center space-y-2 transition-all duration-200 hover:scale-105 shadow-soft">
                  <PieChart className="h-6 w-6" />
                  <span className="text-sm font-medium">Invest</span>
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Status</h3>
              <div className="space-y-3">
                {budgets.slice(0, 3).map((budget) => {
                  const percentage = (budget.spent / budget.limit) * 100;
                  const isOverBudget = percentage > 100;
                  
                  return (
                    <div key={budget.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">{budget.category}</span>
                        <span className="text-sm text-gray-500">
                          ${budget.spent.toFixed(2)} / ${budget.limit.toFixed(2)}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            isOverBudget ? 'bg-red-500' : 'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'transactions' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Transaction History</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Transaction
              </button>
            </div>
            
            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      ${transaction.type === 'income' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-red-100 text-red-600'
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
                      <p className="text-xs text-gray-500">
                        {transaction.category} • {transaction.date.toLocaleDateString()}
                      </p>
                      {transaction.moodRating && (
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500 mr-1">Mood:</span>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <div
                                key={star}
                                className={`w-2 h-2 rounded-full ${
                                  star <= transaction.moodRating! ? 'bg-yellow-400' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`
                      font-semibold text-sm
                      ${transaction.type === 'income' 
                        ? 'text-green-600' 
                        : 'text-red-600'
                      }
                    `}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                    <button className="p-1 rounded-full hover:bg-gray-100 transition-colors">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'budgets' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Budget Management</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Create Budget
              </button>
            </div>
            
            <div className="space-y-4">
              {budgets.map((budget) => {
                const percentage = (budget.spent / budget.limit) * 100;
                const remaining = budget.limit - budget.spent;
                const isOverBudget = percentage > 100;
                const isNearLimit = percentage > 80;
                
                return (
                  <div key={budget.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-gray-900">
                          {budget.category}
                        </span>
                        {isOverBudget ? (
                          <AlertCircle className="h-5 w-5 text-red-500" />
                        ) : percentage >= 100 ? (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        ) : null}
                      </div>
                      <span className="text-sm text-gray-500">
                        ${budget.spent.toFixed(2)} / ${budget.limit.toFixed(2)}
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div
                        className={`
                          h-3 rounded-full transition-all duration-300
                          ${isOverBudget 
                            ? 'bg-gradient-to-r from-red-400 to-red-500' 
                            : 'bg-gradient-to-r from-mint-400 to-sage-500'
                          }
                        `}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className={
                        remaining < 0 
                          ? 'text-red-600 font-medium' 
                          : isNearLimit 
                            ? 'text-yellow-600' 
                            : 'text-gray-600'
                      }>
                        {remaining < 0 
                          ? `Over budget by $${Math.abs(remaining).toFixed(2)}` 
                          : `$${remaining.toFixed(2)} remaining`
                        }
                      </span>
                      <span className="text-gray-500">
                        {percentage.toFixed(1)}% used
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'investments' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Portfolio Value</h3>
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">${totalInvestmentValue.toLocaleString()}</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Gain/Loss</h3>
                <TrendingUp className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-green-600">
                +${totalInvestmentChange.toFixed(2)}
              </p>
              <p className="text-sm text-green-600">
                +{((totalInvestmentChange / (totalInvestmentValue - totalInvestmentChange)) * 100).toFixed(2)}%
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Holdings</h3>
                <PieChart className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{investments.length}</p>
              <p className="text-sm text-gray-600">Assets</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Holdings</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Add Investment
              </button>
            </div>
            <div className="space-y-3">
              {investments.map((investment) => (
                <div key={investment.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600">
                        {investment.symbol.slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{investment.symbol}</p>
                      <p className="text-sm text-gray-600">{investment.name}</p>
                      <p className="text-xs text-gray-500">{investment.shares} shares</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${investment.value.toLocaleString()}</p>
                    <p className={`text-sm flex items-center ${
                      investment.change >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {investment.change >= 0 ? (
                        <TrendingUp className="h-3 w-3 mr-1" />
                      ) : (
                        <TrendingDown className="h-3 w-3 mr-1" />
                      )}
                      {investment.change >= 0 ? '+' : ''}${investment.change.toFixed(2)} ({investment.changePercent.toFixed(1)}%)
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}