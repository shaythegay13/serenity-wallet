import React, { useState } from 'react';
import { Library, Search, Filter, BookOpen, Video, Headphones, Download, Star, Eye } from 'lucide-react';
import ResourceViewer from './ResourceViewer';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'guide';
  category: string;
  duration: string;
  rating: number;
  downloads: number;
  isFavorite: boolean;
  content: string;
}

export default function ContentLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  
  const resources: Resource[] = [
    {
      id: '1',
      title: 'The Psychology of Money: Key Insights',
      description: 'Understanding the emotional and psychological factors that influence our financial decisions.',
      type: 'article',
      category: 'psychology',
      duration: '12 min read',
      rating: 4.8,
      downloads: 1234,
      isFavorite: true,
      content: `The Psychology of Money: Understanding Your Financial Mind

Money is deeply emotional. Our financial decisions are rarely made with pure logic - they're influenced by our past experiences, fears, hopes, and the stories we tell ourselves about money.

Key Insights:

1. Money Scripts
We all have "money scripts" - unconscious beliefs about money formed in childhood. Common scripts include:
- "Money is the root of all evil"
- "Rich people are greedy"
- "I don't deserve wealth"
- "Money doesn't buy happiness"

These scripts drive our financial behavior, often without us realizing it.

2. Emotional Spending Triggers
Common emotional triggers for spending include:
- Stress and anxiety
- Boredom
- Social pressure
- Celebration or reward-seeking
- Depression or sadness

3. The Power of Awareness
Simply becoming aware of your emotional relationship with money is the first step toward healthier financial habits. When you notice an urge to spend, pause and ask:
- What am I feeling right now?
- What need am I trying to meet?
- Will this purchase truly meet that need?

4. Reframing Money Stories
Challenge negative money beliefs by:
- Examining the evidence for and against the belief
- Considering alternative perspectives
- Practicing self-compassion around financial mistakes
- Focusing on your values and goals

Remember: Your relationship with money can change. With awareness and practice, you can develop a healthier, more intentional approach to your finances.`
    },
    {
      id: '2',
      title: 'Mindful Breathing for Financial Stress',
      description: 'Guided meditation to help manage anxiety around money and financial decisions.',
      type: 'audio',
      category: 'mindfulness',
      duration: '15 min',
      rating: 4.9,
      downloads: 892,
      isFavorite: false,
      content: `Mindful Breathing for Financial Stress - Audio Meditation

This 15-minute guided meditation is designed specifically for managing financial anxiety and stress. 

What you'll experience:
- Deep breathing techniques to calm your nervous system
- Body scan to release physical tension related to money stress
- Mindfulness practices for financial decision-making
- Affirmations for financial confidence and peace

Best used when:
- Before making important financial decisions
- When feeling overwhelmed by money matters
- During your daily mindfulness practice
- After receiving financial news or bills

The meditation guides you through proven techniques that help create space between your emotions and your financial choices, leading to more intentional and aligned decisions.`
    }
  ];

  const categories = [
    { id: 'all', label: 'All Categories' },
    { id: 'mindfulness', label: 'Mindfulness' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'budgeting', label: 'Budgeting' },
    { id: 'planning', label: 'Planning' },
    { id: 'therapy', label: 'Therapy' }
  ];

  const types = [
    { id: 'all', label: 'All Types' },
    { id: 'article', label: 'Articles' },
    { id: 'video', label: 'Videos' },
    { id: 'audio', label: 'Audio' },
    { id: 'guide', label: 'Guides' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'audio': return <Headphones className="h-4 w-4" />;
      case 'guide': return <BookOpen className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'video': return 'bg-rose-100 text-rose-700 border-rose-200';
      case 'audio': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'guide': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-emerald-100 text-emerald-700 border-emerald-200';
    }
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  if (selectedResource) {
    return <ResourceViewer resource={selectedResource} onBack={() => setSelectedResource(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 border border-emerald-200/50 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Library className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-4">
            Content Library
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Access our curated collection of financial wellness resources, guides, and mindfulness tools. 
            Everything you need for your financial wellness journey.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-emerald-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/80 border border-emerald-200 rounded-xl px-12 py-4 focus:ring-2 focus:ring-emerald-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm text-lg"
              placeholder="Search resources..."
            />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-3">
              <Filter className="h-5 w-5 text-emerald-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-emerald-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="border border-emerald-200 rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
            >
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div key={resource.id} className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className={`p-2 rounded-xl border ${getTypeColor(resource.type)}`}>
                  {getTypeIcon(resource.type)}
                </div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {resource.type}
                </span>
              </div>
              <button className={`p-2 rounded-full transition-colors ${
                resource.isFavorite ? 'text-amber-500 bg-amber-50' : 'text-slate-400 hover:text-amber-500 hover:bg-amber-50'
              }`}>
                <Star className={`h-4 w-4 ${resource.isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-2">{resource.title}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{resource.description}</p>
            
            <div className="flex items-center justify-between mb-6 text-sm text-slate-500">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {resource.duration}
              </span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-amber-400 fill-current" />
                  <span className="font-medium">{resource.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="h-3 w-3" />
                  <span>{resource.downloads}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedResource(resource)}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Eye className="h-4 w-4 mr-2" />
              View Resource
            </button>
          </div>
        ))}
      </div>
      
      {filteredResources.length === 0 && (
        <div className="bg-gradient-to-br from-white to-emerald-50 rounded-3xl p-12 border border-emerald-200/50 text-center shadow-xl">
          <Library className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-slate-800 mb-3">No resources found</h3>
          <p className="text-slate-600">Try adjusting your search terms or filters.</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 border border-sky-200/50 shadow-lg">
          <BookOpen className="h-8 w-8 text-sky-600 mb-3" />
          <h3 className="font-bold text-sky-800 mb-2">Articles</h3>
          <p className="text-2xl font-bold text-sky-700">{resources.filter(r => r.type === 'article').length}</p>
          <p className="text-sm text-sky-600">In-depth guides</p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-2xl p-6 border border-purple-200/50 shadow-lg">
          <Headphones className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="font-bold text-purple-800 mb-2">Audio Content</h3>
          <p className="text-2xl font-bold text-purple-700">{resources.filter(r => r.type === 'audio').length}</p>
          <p className="text-sm text-purple-600">Meditations & talks</p>
        </div>
        
        <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-6 border border-rose-200/50 shadow-lg">
          <Video className="h-8 w-8 text-rose-600 mb-3" />
          <h3 className="font-bold text-rose-800 mb-2">Video Courses</h3>
          <p className="text-2xl font-bold text-rose-700">{resources.filter(r => r.type === 'video').length}</p>
          <p className="text-sm text-rose-600">Visual learning</p>
        </div>
      </div>
    </div>
  );
}