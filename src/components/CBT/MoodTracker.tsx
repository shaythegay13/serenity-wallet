import React, { useState } from 'react';
import { Smile, Meh, Frown, TrendingUp, Calendar, Save, ArrowLeft, Brain, Heart } from 'lucide-react';

interface MoodEntry {
  date: string;
  mood: number;
  trigger?: string;
  notes?: string;
}

interface MoodTrackerProps {
  onBack?: () => void;
}

export default function MoodTracker({ onBack }: MoodTrackerProps) {
  const [currentView, setCurrentView] = useState<'main' | 'entry' | 'history'>('main');
  const [currentMood, setCurrentMood] = useState<number | null>(null);
  const [trigger, setTrigger] = useState('');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState<MoodEntry[]>([
    { date: '2025-01-10', mood: 4, trigger: 'Successful budget meeting', notes: 'Felt confident about financial planning' },
    { date: '2025-01-09', mood: 2, trigger: 'Unexpected expense', notes: 'Car repair bill stressed me out' },
    { date: '2025-01-08', mood: 5, trigger: 'Reached savings goal', notes: 'Proud of my progress' },
    { date: '2025-01-07', mood: 3, trigger: 'Overspent on lunch', notes: 'Need to be more mindful' },
    { date: '2025-01-06', mood: 4, trigger: 'Paid bills on time', notes: 'Feeling organized and in control' },
    { date: '2025-01-05', mood: 2, trigger: 'Credit card statement', notes: 'Worried about holiday spending' },
  ]);

  const getMoodIcon = (mood: number) => {
    if (mood >= 4) return <Smile className="h-6 w-6 text-emerald-500" />;
    if (mood >= 3) return <Meh className="h-6 w-6 text-amber-500" />;
    return <Frown className="h-6 w-6 text-rose-500" />;
  };

  const getMoodColor = (mood: number) => {
    if (mood >= 4) return 'bg-emerald-100 border-emerald-300 text-emerald-700';
    if (mood >= 3) return 'bg-amber-100 border-amber-300 text-amber-700';
    return 'bg-rose-100 border-rose-300 text-rose-700';
  };

  const getMoodLabel = (mood: number) => {
    const labels = ['', 'Very Stressed', 'Stressed', 'Neutral', 'Confident', 'Very Confident'];
    return labels[mood] || 'Unknown';
  };

  const handleSaveMood = () => {
    if (currentMood) {
      const newEntry: MoodEntry = {
        date: new Date().toISOString().split('T')[0],
        mood: currentMood,
        trigger,
        notes
      };
      setEntries([newEntry, ...entries]);
      setCurrentMood(null);
      setTrigger('');
      setNotes('');
      setCurrentView('main');
    }
  };

  if (currentView === 'entry') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setCurrentView('main')}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Mood Tracker</span>
          </button>
          
          <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl p-8 border border-sky-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-2">
                Daily Mood Check-in
              </h2>
              <p className="text-slate-600">
                Take a moment to reflect on your financial wellbeing today
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-slate-700 mb-4 text-center">
                  How are you feeling about your finances today?
                </label>
                <div className="flex justify-center space-x-4">
                  {[1, 2, 3, 4, 5].map((mood) => (
                    <button
                      key={mood}
                      onClick={() => setCurrentMood(mood)}
                      className={`
                        w-16 h-16 rounded-2xl border-2 transition-all duration-300 transform
                        ${currentMood === mood 
                          ? getMoodColor(mood) + ' scale-110 shadow-lg' 
                          : 'border-sky-200 hover:border-sky-300 bg-white/80 hover:scale-105'
                        }
                        flex flex-col items-center justify-center
                      `}
                    >
                      {getMoodIcon(mood)}
                      <span className="text-xs font-medium mt-1">{mood}</span>
                    </button>
                  ))}
                </div>
                {currentMood && (
                  <p className="text-center mt-3 text-lg font-medium text-slate-700">
                    {getMoodLabel(currentMood)}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  What triggered this feeling?
                </label>
                <input
                  type="text"
                  value={trigger}
                  onChange={(e) => setTrigger(e.target.value)}
                  className="w-full bg-white/80 border border-sky-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="e.g., unexpected bill, reached savings goal, paid off debt..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Reflection & Self-Compassion
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-white/80 border border-sky-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  rows={4}
                  placeholder="How can you practice self-compassion around this feeling? What would you tell a friend in this situation?"
                />
              </div>
              
              <button 
                onClick={handleSaveMood}
                disabled={!currentMood}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-4 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Mood Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'history') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentView('main')}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Mood Tracker</span>
          </button>
          
          <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl p-8 border border-sky-200/50 shadow-xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-sky-600" />
              Mood History & Insights
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 border border-emerald-200/50">
                <h3 className="font-semibold text-emerald-800 mb-2">Average Mood</h3>
                <p className="text-3xl font-bold text-emerald-700">3.3/5</p>
                <p className="text-sm text-emerald-600">Last 7 days</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border border-amber-200/50">
                <h3 className="font-semibold text-amber-800 mb-2">Most Common Trigger</h3>
                <p className="text-lg font-bold text-amber-700">Unexpected Expenses</p>
                <p className="text-sm text-amber-600">3 occurrences</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 border border-sky-200/50">
                <h3 className="font-semibold text-sky-800 mb-2">Improvement</h3>
                <p className="text-3xl font-bold text-sky-700">+0.8</p>
                <p className="text-sm text-sky-600">vs last week</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {entries.map((entry, index) => (
                <div key={index} className="bg-gradient-to-r from-white to-sky-50/30 rounded-2xl p-6 border border-sky-200/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getMoodIcon(entry.mood)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMoodColor(entry.mood)}`}>
                            {getMoodLabel(entry.mood)}
                          </span>
                          <span className="text-sm text-slate-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {entry.date}
                          </span>
                        </div>
                      </div>
                      {entry.trigger && (
                        <p className="font-medium text-slate-800 mb-2">
                          <span className="text-slate-600">Trigger:</span> {entry.trigger}
                        </p>
                      )}
                      {entry.notes && (
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {entry.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
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
          <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-3">
            Mood Tracker
          </h2>
          <p className="text-slate-600 text-lg">
            Track your emotional relationship with money and identify patterns
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button
            onClick={() => setCurrentView('entry')}
            className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-6 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Heart className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Daily Check-in</h3>
            <p className="text-emerald-100 text-sm">Record your current mood and financial feelings</p>
          </button>
          
          <button
            onClick={() => setCurrentView('history')}
            className="bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl p-6 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <TrendingUp className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">View History</h3>
            <p className="text-sky-100 text-sm">Analyze patterns and track your emotional progress</p>
          </button>
          
          <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white rounded-2xl p-6 shadow-lg">
            <Calendar className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">7-Day Average</h3>
            <p className="text-3xl font-bold mb-1">3.3/5</p>
            <p className="text-amber-100 text-sm">Steady improvement</p>
          </div>
        </div>
      </div>
    </div>
  );
}