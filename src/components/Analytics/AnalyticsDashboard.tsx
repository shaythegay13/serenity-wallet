import React, { useState } from 'react';
import { BarChart3, TrendingUp, Target, Award, Calendar, DollarSign, PieChart, Activity } from 'lucide-react';
import { Transaction, Budget } from '../../types';
import SpendingChart from './SpendingChart';

interface AnalyticsDashboardProps {
  transactions: Transaction[];
  budgets: Budget[];
}

export default function AnalyticsDashboard({ transactions, budgets }: AnalyticsDashboardProps) {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'spending', label: 'Spending Analysis' },
    { id: 'progress', label: 'Progress Tracking' },
    { id: 'goals', label: 'Goals & Milestones' }
  ];

  // Calculate analytics data
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const savingsRate = totalIncome > 0 ? ((totalIncome - totalExpenses) / totalIncome) * 100 : 0;

  const achievements = [
    { title: 'First Budget Created', description: 'Set up your first monthly budget', earned: true, date: '2025-01-01' },
    { title: 'Mindful Spender', description: 'Used mood tracking for 10 transactions', earned: true, date: '2025-01-05' },
    { title: 'Savings Streak', description: 'Stayed under budget for 7 days', earned: true, date: '2025-01-08' },
    { title: 'Investment Explorer', description: 'Made your first investment', earned: false, date: null },
    { title: 'Community Helper', description: 'Helped 5 community members', earned: false, date: null },
    { title: 'Wellness Warrior', description: 'Completed 30 mood check-ins', earned: false, date: null }
  ];

  const goals = [
    { title: 'Build Emergency Fund', target: 5000, current: 3200, category: 'Savings', deadline: '2025-06-01' },
    { title: 'Reduce Food Spending', target: 300, current: 195, category: 'Budget', deadline: '2025-02-01' },
    { title: 'Complete Investment Course', target: 100, current: 60, category: 'Education', deadline: '2025-03-15' },
    { title: 'Daily Mood Tracking', target: 30, current: 18, category: 'Wellness', deadline: '2025-02-10' }
  ];

  const wellnessMetrics = [
    { label: 'Mood Check-ins', value: 18, target: 30, unit: 'days' },
    { label: 'Journal Entries', value: 12, target: 20, unit: 'entries' },
    { label: 'Mindful Purchases', value: 8, target: 15, unit: 'transactions' },
    { label: 'Community Posts', value: 3, target: 10, unit: 'posts' }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-serenity-50 to-mint-50 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics & Progress</h2>
        <p className="text-gray-600 mb-6">
          Track your financial health, wellness progress, and personal growth across all areas.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Income</h3>
                <TrendingUp className="h-5 w-5 text-mint-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">${totalIncome.toLocaleString()}</p>
              <p className="text-sm text-mint-600">+12% vs last month</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 border border-gold-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Expenses</h3>
                <DollarSign className="h-5 w-5 text-gold-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">${totalExpenses.toLocaleString()}</p>
              <p className="text-sm text-gold-600">+5% vs last month</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Savings Rate</h3>
                <Target className="h-5 w-5 text-serenity-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{savingsRate.toFixed(1)}%</p>
              <p className="text-sm text-serenity-600">Above target</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Wellness Score</h3>
                <Activity className="h-5 w-5 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">8.2/10</p>
              <p className="text-sm text-sage-600">Excellent progress</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SpendingChart transactions={transactions} />
            
            <div className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 shadow-soft">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wellness Metrics</h3>
              <div className="space-y-4">
                {wellnessMetrics.map((metric, index) => {
                  const percentage = (metric.value / metric.target) * 100;
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className="text-sm text-gray-500">
                          {metric.value} / {metric.target} {metric.unit}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
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

      {selectedTab === 'spending' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SpendingChart transactions={transactions} />
            
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-900 mb-2">💡 Insight</h4>
                  <p className="text-sm text-blue-800">
                    Your food spending has increased by 15% this month. Consider meal planning to stay mindful of your budget.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">🎉 Achievement</h4>
                  <p className="text-sm text-green-800">
                    Great job! You've reduced transportation costs by 20% compared to last month.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'progress' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.filter(a => a.earned).map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <Award className="h-8 w-8 text-yellow-500" />
                  <span className="text-xs text-gray-500">{achievement.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Timeline</h3>
            <div className="space-y-4">
              {achievements.filter(a => a.earned).map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{achievement.title}</p>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500">{achievement.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'goals' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {goals.map((goal, index) => {
              const percentage = (goal.current / goal.target) * 100;
              const isCompleted = percentage >= 100;
              
              return (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {goal.category}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">
                        {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`bg-gradient-to-r from-sage-500 to-mint-500 h-2 rounded-full transition-all duration-300 ${
                          isCompleted ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500">{percentage.toFixed(1)}% complete</span>
                      <span className="text-gray-500">Due: {goal.deadline}</span>
                    </div>
                  </div>
                  
                  {isCompleted ? (
                    <div className="flex items-center text-green-600 text-sm">
                      <Award className="h-4 w-4 mr-2" />
                      Goal completed!
                    </div>
                  ) : (
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Update Progress
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}