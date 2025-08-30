import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, PieChart, BarChart3, Play, BookOpen, Target, AlertTriangle } from 'lucide-react';

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

interface SimulationResult {
  investment: string;
  initialAmount: number;
  finalAmount: number;
  return: number;
  timeframe: string;
}

export default function InvestmentDashboard() {
  const [selectedTab, setSelectedTab] = useState('portfolio');
  const [simulationAmount, setSimulationAmount] = useState(1000);
  const [simulationTimeframe, setSimulationTimeframe] = useState('1year');
  
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
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'simulator', label: 'Investment Simulator' },
    { id: 'education', label: 'Learn Investing' },
    { id: 'research', label: 'Market Research' }
  ];

  const educationContent = [
    {
      title: 'Investment Basics',
      description: 'Understanding stocks, bonds, and mutual funds',
      duration: '15 min',
      level: 'Beginner'
    },
    {
      title: 'Risk vs Return',
      description: 'How to balance risk and potential returns',
      duration: '20 min',
      level: 'Beginner'
    },
    {
      title: 'Diversification Strategies',
      description: 'Building a balanced investment portfolio',
      duration: '25 min',
      level: 'Intermediate'
    },
    {
      title: 'Dollar-Cost Averaging',
      description: 'Systematic investing to reduce market timing risk',
      duration: '18 min',
      level: 'Intermediate'
    }
  ];

  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalChange = investments.reduce((sum, inv) => sum + inv.change, 0);
  const totalChangePercent = totalValue > 0 ? (totalChange / (totalValue - totalChange)) * 100 : 0;

  const simulateInvestment = () => {
    const scenarios = [
      { name: 'Conservative Portfolio', return: 0.05 },
      { name: 'Balanced Portfolio', return: 0.07 },
      { name: 'Growth Portfolio', return: 0.09 },
      { name: 'S&P 500 Index', return: 0.10 }
    ];

    const years = simulationTimeframe === '1year' ? 1 : simulationTimeframe === '5years' ? 5 : 10;
    
    return scenarios.map(scenario => ({
      investment: scenario.name,
      initialAmount: simulationAmount,
      finalAmount: simulationAmount * Math.pow(1 + scenario.return, years),
      return: (simulationAmount * Math.pow(1 + scenario.return, years)) - simulationAmount,
      timeframe: `${years} year${years > 1 ? 's' : ''}`
    }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-serenity-50 to-mint-50 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Investment Center</h2>
        <p className="text-gray-600 mb-6">
          Track your investments, learn about markets, and simulate investment strategies.
        </p>
        
        <div className="flex space-x-1 bg-serenity-100/50 rounded-xl p-1">
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

      {selectedTab === 'portfolio' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Portfolio Value</h3>
                <DollarSign className="h-5 w-5 text-mint-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">${totalValue.toLocaleString()}</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Total Gain/Loss</h3>
                <TrendingUp className="h-5 w-5 text-sage-600" />
              </div>
              <p className="text-2xl font-bold text-sage-600">
                +${totalChange.toFixed(2)}
              </p>
              <p className="text-sm text-sage-600">
                +{totalChangePercent.toFixed(2)}%
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gray-600">Holdings</h3>
                <PieChart className="h-5 w-5 text-serenity-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{investments.length}</p>
              <p className="text-sm text-gray-600">Assets</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-gold-50/30 rounded-2xl p-6 border border-gold-200/50 shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Holdings</h3>
              <button className="serenity-button">
                Add Investment
              </button>
            </div>
            <div className="space-y-3">
              {investments.map((investment) => (
                <div key={investment.id} className="flex items-center justify-between p-4 rounded-xl border border-gold-200/50 hover:bg-gold-50/30 transition-all duration-200 bg-white/70">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-100 to-serenity-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gold-600">
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
                      investment.change >= 0 ? 'text-sage-600' : 'text-red-600'
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

      {selectedTab === 'simulator' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-serenity-600" />
              Investment Simulator
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Amount
                </label>
                <input
                  type="number"
                  value={simulationAmount}
                  onChange={(e) => setSimulationAmount(Number(e.target.value))}
                  className="serenity-input w-full"
                  placeholder="Enter amount to invest"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Time Horizon
                </label>
                <select
                  value={simulationTimeframe}
                  onChange={(e) => setSimulationTimeframe(e.target.value)}
                  className="serenity-input w-full"
                >
                  <option value="1year">1 Year</option>
                  <option value="5years">5 Years</option>
                  <option value="10years">10 Years</option>
                </select>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gold-50 to-serenity-50 rounded-xl p-4 border border-gold-200/50 mb-4">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-gold-600 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gold-800">Investment Disclaimer</p>
                  <p className="text-xs text-gold-700 mt-1">
                    These are hypothetical projections based on historical averages. Past performance does not guarantee future results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {simulateInvestment().map((result, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
                <h4 className="font-semibold text-gray-900 mb-3">{result.investment}</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Initial Investment</span>
                    <span className="font-medium">${result.initialAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Projected Value</span>
                    <span className="font-medium">${result.finalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Potential Return</span>
                    <span className="font-semibold text-sage-600">+${result.return.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'education' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationContent.map((content, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-between mb-3">
                <BookOpen className="h-6 w-6 text-sage-600" />
                <span className="px-2 py-1 bg-sage-100 text-sage-700 text-xs rounded-full font-medium">
                  {content.level}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{content.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{content.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">{content.duration}</span>
              </div>
              <button className="serenity-button w-full flex items-center justify-center">
                <Play className="h-4 w-4 mr-2" />
                Start Learning
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'research' && (
        <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Research Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-gradient-to-br from-serenity-500 to-serenity-600 text-white p-4 rounded-xl hover:from-serenity-600 hover:to-serenity-700 transition-all duration-200 hover:scale-105 shadow-soft">
              <Target className="h-6 w-6 mb-2" />
              <p className="font-medium">Stock Screener</p>
              <p className="text-xs opacity-90">Find stocks by criteria</p>
            </button>
            <button className="bg-gradient-to-br from-mint-500 to-sage-500 text-white p-4 rounded-xl hover:from-mint-600 hover:to-sage-600 transition-all duration-200 hover:scale-105 shadow-soft">
              <BarChart3 className="h-6 w-6 mb-2" />
              <p className="font-medium">Market Analysis</p>
              <p className="text-xs opacity-90">Charts and trends</p>
            </button>
            <button className="bg-gradient-to-br from-gold-500 to-gold-600 text-white p-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all duration-200 hover:scale-105 shadow-soft">
              <BookOpen className="h-6 w-6 mb-2" />
              <p className="font-medium">Company Reports</p>
              <p className="text-xs opacity-90">Financial statements</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}