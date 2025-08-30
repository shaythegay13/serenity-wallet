import React, { useState } from 'react';
import { PenTool, Save, Calendar, Tag, ArrowLeft, BookOpen, Lightbulb, Heart } from 'lucide-react';

interface JournalEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  mood: number;
}

interface JournalingToolProps {
  onBack?: () => void;
}

export default function JournalingTool({ onBack }: JournalingToolProps) {
  const [currentView, setCurrentView] = useState<'main' | 'write' | 'entries'>('main');
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: '1',
      date: '2025-01-10',
      title: 'Reflecting on Today\'s Spending',
      content: 'I noticed I felt anxious when I saw the grocery bill today. Taking a moment to breathe and remember that this is a necessary expense for my health and wellbeing. I\'m learning to distinguish between needs and wants, and groceries definitely fall into the needs category.',
      tags: ['anxiety', 'spending', 'self-compassion', 'groceries'],
      mood: 3
    },
    {
      id: '2',
      date: '2025-01-09',
      title: 'Gratitude Practice',
      content: 'Grateful for having enough money to buy healthy food and support my family. This abundance mindset helps me make better financial decisions. When I focus on what I have rather than what I lack, I feel more confident about my financial choices.',
      tags: ['gratitude', 'abundance', 'family', 'confidence'],
      mood: 5
    },
    {
      id: '3',
      date: '2025-01-08',
      title: 'Overcoming Impulse Purchase Urge',
      content: 'Almost bought that expensive gadget online, but I used the 24-hour rule. Feeling proud that I paused and asked myself if this purchase aligns with my values and goals. It doesn\'t, so I\'m not buying it.',
      tags: ['impulse', 'self-control', 'values', 'goals'],
      mood: 4
    }
  ]);

  const [newEntry, setNewEntry] = useState({
    title: '',
    content: '',
    tags: '',
    mood: 3
  });

  const prompts = [
    "What emotions came up around money today?",
    "How did I practice financial self-care?",
    "What am I grateful for financially?",
    "What financial fear can I reframe today?",
    "How did my spending align with my values?",
    "What financial win can I celebrate?",
    "How can I show myself compassion about money?",
    "What money story am I telling myself?"
  ];

  const handleSaveEntry = () => {
    if (newEntry.title && newEntry.content) {
      const entry: JournalEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        title: newEntry.title,
        content: newEntry.content,
        tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        mood: newEntry.mood
      };
      setEntries([entry, ...entries]);
      setNewEntry({ title: '', content: '', tags: '', mood: 3 });
      setCurrentView('main');
    }
  };

  if (currentView === 'write') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentView('main')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Journaling</span>
          </button>
          
          <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl p-8 border border-emerald-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <PenTool className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-2">
                Financial Wellness Journal
              </h2>
              <p className="text-slate-600">
                Express your thoughts and feelings about money in a safe space
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Entry Title
                </label>
                <input
                  type="text"
                  value={newEntry.title}
                  onChange={(e) => setNewEntry({...newEntry, title: e.target.value})}
                  className="w-full bg-white/80 border border-emerald-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  placeholder="What's on your mind about money today?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Your Reflection
                </label>
                <textarea
                  value={newEntry.content}
                  onChange={(e) => setNewEntry({...newEntry, content: e.target.value})}
                  className="w-full bg-white/80 border border-emerald-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                  rows={8}
                  placeholder="Write about your financial thoughts, feelings, or experiences. Remember to be kind to yourself..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={newEntry.tags}
                    onChange={(e) => setNewEntry({...newEntry, tags: e.target.value})}
                    className="w-full bg-white/80 border border-emerald-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    placeholder="anxiety, gratitude, goals, progress..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Mood Rating (1-5)
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={newEntry.mood}
                      onChange={(e) => setNewEntry({...newEntry, mood: parseInt(e.target.value)})}
                      className="flex-1"
                    />
                    <span className="text-lg font-semibold text-slate-700 w-8">{newEntry.mood}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>Stressed</span>
                    <span>Neutral</span>
                    <span>Confident</span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleSaveEntry}
                disabled={!newEntry.title || !newEntry.content}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-4 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Journal Entry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 border border-emerald-200/50 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
            <PenTool className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-3">
            Financial Wellness Journal
          </h2>
          <p className="text-slate-600 text-lg">
            Process your financial emotions through guided reflection and writing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => setCurrentView('write')}
            className="bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-2xl p-6 hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <PenTool className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">New Entry</h3>
            <p className="text-sky-100 text-sm">Start a new journal reflection</p>
          </button>
          
          <button
            onClick={() => setCurrentView('entries')}
            className="bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-6 hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <BookOpen className="h-8 w-8 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">View Entries</h3>
            <p className="text-emerald-100 text-sm">Read your past reflections ({entries.length} entries)</p>
          </button>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-3xl p-8 border border-amber-200/50 shadow-xl">
        <h3 className="text-xl font-bold text-amber-800 mb-6 flex items-center">
          <Lightbulb className="h-6 w-6 mr-3" />
          Journal Prompts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {prompts.map((prompt, index) => (
            <button
              key={index}
              onClick={() => {
                setNewEntry({...newEntry, content: prompt + '\n\n'});
                setCurrentView('write');
              }}
              className="text-left p-4 rounded-2xl border border-amber-200/50 hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 shadow-lg"
            >
              <p className="text-sm text-amber-800 font-medium">{prompt}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}