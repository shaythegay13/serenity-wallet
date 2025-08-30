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
    },
    {
      id: '3',
      title: 'Building Your First Budget',
      description: 'Step-by-step video guide to creating a budget that actually works for your lifestyle.',
      type: 'video',
      category: 'budgeting',
      duration: '18 min',
      rating: 4.7,
      downloads: 2156,
      isFavorite: true,
      content: `Building Your First Budget - Video Course

This comprehensive video guide walks you through creating a realistic, sustainable budget that fits your unique lifestyle and goals.

Video Chapters:
1. Introduction: Why Budgeting Matters (2 min)
2. Gathering Your Financial Information (3 min)
3. The 50/30/20 Rule Explained (4 min)
4. Customizing Your Budget Categories (3 min)
5. Tools and Apps for Budget Tracking (2 min)
6. Common Budgeting Mistakes to Avoid (2 min)
7. Making Adjustments and Staying Flexible (2 min)

Key Takeaways:
- A budget is a plan, not a restriction
- Start simple and adjust as you learn
- Track your spending for at least a week before creating your budget
- Build in some flexibility for unexpected expenses
- Review and adjust monthly

By the end of this video, you'll have a clear understanding of how to create and maintain a budget that supports your financial goals while allowing for life's uncertainties.`
    },
    {
      id: '4',
      title: 'Complete Guide to Emergency Funds',
      description: 'Comprehensive guide covering everything you need to know about building and maintaining an emergency fund.',
      type: 'guide',
      category: 'planning',
      duration: '25 min read',
      rating: 4.6,
      downloads: 1567,
      isFavorite: false,
      content: `Complete Guide to Emergency Funds

An emergency fund is one of the most important financial tools you can have. It's money set aside specifically for unexpected expenses or financial emergencies.

Chapter 1: Why You Need an Emergency Fund

Life is unpredictable. Unexpected expenses can include:
- Medical emergencies
- Car repairs
- Home maintenance issues
- Job loss or reduced income
- Family emergencies

Without an emergency fund, these situations often lead to debt, stress, and financial setbacks.

Chapter 2: How Much Should You Save?

The general recommendation is 3-6 months of living expenses, but your ideal amount depends on:
- Job stability
- Health considerations
- Family situation
- Other sources of emergency funds

Chapter 3: Where to Keep Your Emergency Fund

Your emergency fund should be:
- Easily accessible (liquid)
- Safe from market volatility
- Earning some interest

Good options include:
- High-yield savings accounts
- Money market accounts
- Short-term CDs

Chapter 4: Building Your Fund

Start small and build gradually:
1. Set an initial goal of $500-$1000
2. Automate transfers to your emergency fund
3. Use windfalls (tax refunds, bonuses) to boost your fund
4. Gradually increase to your full target amount

Chapter 5: When to Use Your Emergency Fund

Use your emergency fund for true emergencies:
- Unexpected medical expenses
- Essential car or home repairs
- Job loss or income reduction

Don't use it for:
- Vacations
- Holiday gifts
- Planned expenses
- Investment opportunities

Chapter 6: Replenishing Your Fund

If you use your emergency fund:
1. Prioritize replenishing it quickly
2. Temporarily reduce other savings goals if needed
3. Look for ways to increase income or reduce expenses
4. Learn from the experience to prevent future emergencies

Remember: An emergency fund provides peace of mind and financial security. It's not about the return on investment - it's about protection and stability.`
    },
    {
      id: '5',
      title: 'Overcoming Money Shame',
      description: 'Therapeutic techniques for addressing shame and guilt around financial mistakes.',
      type: 'article',
      category: 'therapy',
      duration: '8 min read',
      rating: 4.9,
      downloads: 743,
      isFavorite: false,
      content: `Overcoming Money Shame: A Path to Financial Healing

Money shame is the painful feeling that we are fundamentally flawed because of our financial situation or past financial mistakes. It's different from guilt (feeling bad about what we did) - shame is feeling bad about who we are.

Understanding Money Shame

Money shame often stems from:
- Childhood messages about money
- Comparing ourselves to others
- Past financial mistakes
- Societal pressure and expectations
- Family financial trauma

Signs of money shame include:
- Avoiding financial conversations
- Hiding purchases or debt
- Feeling unworthy of financial success
- Perfectionism around money
- Self-sabotaging financial progress

Healing Strategies

1. Practice Self-Compassion
- Treat yourself with the same kindness you'd show a good friend
- Remember that everyone makes financial mistakes
- Focus on learning and growth rather than perfection

2. Challenge Shame-Based Thoughts
- Notice when shame thoughts arise
- Ask: "Is this thought helpful or harmful?"
- Replace shame thoughts with compassionate ones

3. Share Your Story
- Talk to trusted friends or family about your financial struggles
- Consider joining a support group
- Remember that shame thrives in secrecy

4. Focus on Your Values
- Identify what truly matters to you
- Align your financial decisions with your values
- Celebrate progress, no matter how small

5. Seek Professional Help
- Consider therapy if shame is significantly impacting your life
- Look for therapists who specialize in financial issues
- Remember that seeking help is a sign of strength

Moving Forward

Healing from money shame is a process, not a destination. Be patient with yourself as you develop a healthier relationship with money. Remember that your worth as a person is not determined by your bank account or financial mistakes.

You deserve financial peace and prosperity. Start where you are, use what you have, and take one small step at a time toward financial healing.`
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