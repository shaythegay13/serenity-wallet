import React, { useState } from 'react';
import { Users, MessageCircle, Heart, Share2, Clock, TrendingUp, Plus, Search } from 'lucide-react';
import ForumThread from './ForumThread';

interface ForumPost {
  id: string;
  author: string;
  title: string;
  content: string;
  category: string;
  replies: number;
  likes: number;
  timeAgo: string;
  isLiked: boolean;
}

export default function CommunityHub() {
  const [selectedTab, setSelectedTab] = useState('forums');
  const [selectedThread, setSelectedThread] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [posts] = useState<ForumPost[]>([
    {
      id: '1',
      author: 'Sarah M.',
      title: 'How I overcame my spending anxiety',
      content: 'After months of feeling overwhelmed by financial decisions, I started using the mindful spending techniques from this app. The breathing exercises before purchases have been game-changing...',
      category: 'Success Stories',
      replies: 23,
      likes: 45,
      timeAgo: '2 hours ago',
      isLiked: false
    },
    {
      id: '2',
      author: 'Mike R.',
      title: 'Emergency fund milestone reached!',
      content: 'Just wanted to share that I finally reached my 6-month emergency fund goal! The community support here has been incredible. Thank you all for the encouragement...',
      category: 'Achievements',
      replies: 18,
      likes: 67,
      timeAgo: '5 hours ago',
      isLiked: true
    },
    {
      id: '3',
      author: 'Alex K.',
      title: 'Struggling with impulse purchases',
      content: 'I keep making impulse purchases despite setting budgets. Has anyone found effective strategies for this? Looking for practical advice...',
      category: 'Support',
      replies: 31,
      likes: 12,
      timeAgo: '1 day ago',
      isLiked: false
    },
    {
      id: '4',
      author: 'Emma L.',
      title: 'Mindful money meditation changed my life',
      content: 'I never thought meditation could help with finances, but the daily practice has completely shifted my relationship with money. I feel more intentional and less reactive...',
      category: 'Mindfulness',
      replies: 15,
      likes: 34,
      timeAgo: '2 days ago',
      isLiked: false
    },
    {
      id: '5',
      author: 'David P.',
      title: 'First time investor - need encouragement',
      content: 'Just made my first investment and I\'m nervous! Any tips for managing investment anxiety? The market seems so unpredictable...',
      category: 'Investing',
      replies: 42,
      likes: 28,
      timeAgo: '3 days ago',
      isLiked: true
    }
  ]);

  const tabs = [
    { id: 'forums', label: 'Forums' },
    { id: 'groups', label: 'Support Groups' },
    { id: 'challenges', label: 'Challenges' }
  ];

  const supportGroups = [
    { 
      name: 'Debt-Free Journey', 
      members: 1247, 
      description: 'Support for those working to become debt-free',
      recentActivity: 'New post 2 hours ago',
      isJoined: true
    },
    { 
      name: 'Mindful Spenders', 
      members: 892, 
      description: 'Practice mindful spending habits together',
      recentActivity: 'Discussion started 4 hours ago',
      isJoined: false
    },
    { 
      name: 'Investment Beginners', 
      members: 2156, 
      description: 'Learn investing basics in a supportive environment',
      recentActivity: 'Weekly meetup tomorrow',
      isJoined: true
    },
    { 
      name: 'Financial Anxiety Support', 
      members: 743, 
      description: 'Overcome money-related stress and anxiety',
      recentActivity: 'New member joined',
      isJoined: false
    }
  ];

  const challenges = [
    { 
      title: 'No-Spend Week', 
      participants: 234, 
      daysLeft: 3, 
      description: 'Challenge yourself to avoid non-essential purchases',
      isParticipating: true,
      progress: 4
    },
    { 
      title: '30-Day Budget Track', 
      participants: 567, 
      daysLeft: 12, 
      description: 'Track every expense for 30 days',
      isParticipating: false,
      progress: 0
    },
    { 
      title: 'Gratitude Practice', 
      participants: 189, 
      daysLeft: 8, 
      description: 'Daily financial gratitude journaling',
      isParticipating: true,
      progress: 22
    }
  ];

  const handleLike = (postId: string) => {
    // In a real app, this would update the backend
    console.log('Liked post:', postId);
  };

  if (selectedThread) {
    return <ForumThread threadTitle={selectedThread} onBack={() => setSelectedThread(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-3xl p-8 border border-sky-200/50 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-blue-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-4">
            Community Hub
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Connect with others on similar financial wellness journeys. Share experiences, get support, and celebrate wins together.
          </p>
        </div>
        
        <div className="flex space-x-1 bg-white/50 rounded-xl p-1 backdrop-blur-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`
                flex-1 py-3 px-6 rounded-lg text-sm font-semibold transition-all duration-300
                ${selectedTab === tab.id
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-white/70'
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {selectedTab === 'forums' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-sky-50/30 rounded-2xl p-6 border border-sky-200/50 shadow-lg backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-800">Discussion Forums</h3>
              <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </button>
            </div>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sky-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/80 border border-sky-200 rounded-xl px-10 py-3 focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Search discussions..."
              />
            </div>
            
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-gradient-to-r from-white to-sky-50/30 border border-sky-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-102 cursor-pointer backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-sm font-semibold text-white">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{post.author}</p>
                        <p className="text-xs text-slate-500">{post.timeAgo}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 text-xs rounded-full font-medium border border-emerald-200">
                      {post.category}
                    </span>
                  </div>
                  
                  <h4 
                    className="font-bold text-slate-800 mb-2 hover:text-sky-600 transition-colors cursor-pointer"
                    onClick={() => setSelectedThread(post.title)}
                  >
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center space-x-2 transition-colors ${
                        post.isLiked ? 'text-rose-500' : 'text-slate-500 hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                      <span>{post.likes}</span>
                    </button>
                    <button 
                      onClick={() => setSelectedThread(post.title)}
                      className="flex items-center space-x-2 text-slate-500 hover:text-sky-500 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.replies}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-slate-500 hover:text-emerald-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportGroups.map((group, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">{group.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-slate-500">
                  <Users className="h-4 w-4" />
                  <span>{group.members.toLocaleString()}</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{group.description}</p>
              <div className="flex items-center space-x-2 text-xs text-emerald-600 mb-4">
                <Clock className="h-3 w-3" />
                <span>{group.recentActivity}</span>
              </div>
              <button
                className={`
                  w-full font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg
                  ${group.isJoined
                    ? 'bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 hover:from-slate-300 hover:to-slate-400'
                    : 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700'
                  }
                `}
              >
                {group.isJoined ? 'View Group' : 'Join Group'}
              </button>
            </div>
          ))}
        </div>
      )}

      {selectedTab === 'challenges' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-6 border border-amber-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-slate-800">{challenge.title}</h3>
                <div className="flex items-center space-x-1 text-sm text-amber-600 font-semibold">
                  <Clock className="h-4 w-4" />
                  <span>{challenge.daysLeft}d left</span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{challenge.description}</p>
              
              {challenge.isParticipating && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-600">Your Progress</span>
                    <span className="font-semibold text-slate-800">{challenge.progress} days</span>
                  </div>
                  <div className="w-full bg-amber-100 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-amber-500 to-yellow-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(challenge.progress / 30) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1 text-sm text-slate-500">
                  <TrendingUp className="h-4 w-4" />
                  <span>{challenge.participants} participants</span>
                </div>
              </div>
              
              <button
                className={`
                  w-full font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg
                  ${challenge.isParticipating
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:from-amber-600 hover:to-yellow-700'
                  }
                `}
              >
                {challenge.isParticipating ? 'View Progress' : 'Join Challenge'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}