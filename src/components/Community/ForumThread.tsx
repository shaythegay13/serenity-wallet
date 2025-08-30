import React, { useState } from 'react';
import { ArrowLeft, Heart, MessageCircle, Share2, MoreVertical, Send, Clock } from 'lucide-react';

interface Post {
  id: string;
  author: string;
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
  isOriginalPost?: boolean;
}

interface ForumThreadProps {
  threadTitle: string;
  onBack: () => void;
}

export default function ForumThread({ threadTitle, onBack }: ForumThreadProps) {
  const [newReply, setNewReply] = useState('');
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      author: 'Sarah M.',
      content: 'After months of feeling overwhelmed by financial decisions, I started using the mindful spending techniques from this app. The breathing exercises before purchases have been game-changing. I used to impulse buy when stressed, but now I pause, breathe, and ask myself if this purchase aligns with my values. It\'s helped me save over $500 this month!',
      timeAgo: '2 hours ago',
      likes: 45,
      isLiked: false,
      isOriginalPost: true
    },
    {
      id: '2',
      author: 'Mike R.',
      content: 'This is so inspiring, Sarah! I\'ve been struggling with the same issue. Could you share more about the specific breathing technique you use? I find myself reaching for my credit card when I\'m anxious.',
      timeAgo: '1 hour ago',
      likes: 12,
      isLiked: true
    },
    {
      id: '3',
      author: 'Sarah M.',
      content: 'Of course! I use the 4-7-8 breathing technique: breathe in for 4 counts, hold for 7, exhale for 8. I do this 3 times before any purchase over $20. It gives me just enough time to check in with my emotions and intentions.',
      timeAgo: '45 minutes ago',
      likes: 23,
      isLiked: false
    },
    {
      id: '4',
      author: 'Alex K.',
      content: 'Thank you both for sharing! I\'m going to try this technique. I\'ve been working on mindful spending too, and it\'s amazing how much awareness can change our habits.',
      timeAgo: '30 minutes ago',
      likes: 8,
      isLiked: false
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const handleReply = () => {
    if (newReply.trim()) {
      const newPost: Post = {
        id: Date.now().toString(),
        author: 'You',
        content: newReply,
        timeAgo: 'Just now',
        likes: 0,
        isLiked: false
      };
      setPosts([...posts, newPost]);
      setNewReply('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Community</span>
        </button>
        
        <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl border border-sky-200/50 shadow-xl backdrop-blur-sm overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-2">{threadTitle}</h1>
            <div className="flex items-center space-x-4 text-sky-100 text-sm">
              <span className="flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                {posts.length} replies
              </span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Active 30 min ago
              </span>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            {posts.map((post) => (
              <div key={post.id} className={`
                rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg
                ${post.isOriginalPost 
                  ? 'bg-gradient-to-br from-emerald-50 to-green-100 border-emerald-200/50' 
                  : 'bg-gradient-to-br from-white to-sky-50/30 border-sky-200/50'
                }
              `}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white
                      ${post.author === 'You' 
                        ? 'bg-gradient-to-br from-amber-500 to-yellow-600' 
                        : 'bg-gradient-to-br from-sky-500 to-blue-600'
                      }
                    `}>
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{post.author}</p>
                      <p className="text-xs text-slate-500">{post.timeAgo}</p>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                    <MoreVertical className="h-4 w-4 text-slate-400" />
                  </button>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">{post.content}</p>
                
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
                  <button className="flex items-center space-x-2 text-slate-500 hover:text-sky-500 transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                  <button className="flex items-center space-x-2 text-slate-500 hover:text-emerald-500 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-2xl p-6 border border-slate-200/50">
              <h3 className="font-semibold text-slate-800 mb-4">Add Your Reply</h3>
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                className="w-full bg-white/80 border border-sky-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                rows={4}
                placeholder="Share your thoughts, experiences, or encouragement..."
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleReply}
                  disabled={!newReply.trim()}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Post Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}