import React, { useState } from 'react';
import { Brain, Heart, PenTool, Target, ArrowLeft } from 'lucide-react';
import MoodTracker from './MoodTracker';
import JournalingTool from './JournalingTool';
import CBTExercises from './CBTExercises';

export default function CBTTools() {
  const [currentTool, setCurrentTool] = useState<string | null>(null);

  const tools = [
    {
      id: 'mood-tracker',
      title: 'Mood Tracker',
      description: 'Track your emotional relationship with money and identify patterns over time.',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      hoverColor: 'from-rose-600 to-pink-700'
    },
    {
      id: 'journaling',
      title: 'Financial Wellness Journal',
      description: 'Process emotions and thoughts about money through guided reflection.',
      icon: PenTool,
      color: 'from-emerald-500 to-green-600',
      hoverColor: 'from-emerald-600 to-green-700'
    },
    {
      id: 'exercises',
      title: 'CBT Exercises',
      description: 'Evidence-based cognitive behavioral therapy tools for financial stress.',
      icon: Brain,
      color: 'from-sky-500 to-blue-600',
      hoverColor: 'from-sky-600 to-blue-700'
    },
    {
      id: 'goals',
      title: 'Wellness Goals',
      description: 'Set and track mental health goals related to your financial journey.',
      icon: Target,
      color: 'from-amber-500 to-yellow-600',
      hoverColor: 'from-amber-600 to-yellow-700'
    }
  ];

  if (currentTool === 'mood-tracker') {
    return <MoodTracker onBack={() => setCurrentTool(null)} />;
  }

  if (currentTool === 'journaling') {
    return <JournalingTool onBack={() => setCurrentTool(null)} />;
  }

  if (currentTool === 'exercises') {
    return <CBTExercises onBack={() => setCurrentTool(null)} />;
  }

  if (currentTool === 'goals') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentTool(null)}
            className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to CBT Tools</span>
          </button>
          
          <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-8 border border-amber-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-yellow-700 bg-clip-text text-transparent mb-2">
                Wellness Goals
              </h2>
              <p className="text-slate-600">
                Set and track mental health goals for your financial journey
              </p>
            </div>
            
            <div className="text-center py-12">
              <p className="text-slate-600 mb-4">Wellness goal tracking coming soon!</p>
              <p className="text-sm text-slate-500">This feature will help you set and monitor mental health goals.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-8 border border-sky-200/50 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Brain className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
            CBT Tools
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Cognitive behavioral therapy tools designed specifically for financial stress and wellbeing. 
            Build emotional resilience and develop a healthier relationship with money.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              onClick={() => setCurrentTool(tool.id)}
              className={`
                bg-gradient-to-br ${tool.color} text-white rounded-3xl p-8 
                hover:${tool.hoverColor} transition-all duration-300 transform hover:scale-105 
                shadow-xl hover:shadow-2xl text-left group
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className="h-10 w-10 text-white/90 group-hover:text-white transition-colors" />
                <div className="w-3 h-3 bg-white/30 rounded-full group-hover:bg-white/50 transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">{tool.description}</p>
              <div className="mt-6 flex items-center text-white/80 text-sm">
                <span>Start Tool</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}