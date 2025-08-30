import React, { useState } from 'react';
import { ArrowLeft, Download, Star, Clock, BookOpen, Play, Headphones } from 'lucide-react';

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

interface ResourceViewerProps {
  resource: Resource;
  onBack: () => void;
}

export default function ResourceViewer({ resource, onBack }: ResourceViewerProps) {
  const [isFavorited, setIsFavorited] = useState(resource.isFavorite);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const getTypeIcon = () => {
    switch (resource.type) {
      case 'video': return <Play className="h-6 w-6" />;
      case 'audio': return <Headphones className="h-6 w-6" />;
      default: return <BookOpen className="h-6 w-6" />;
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case 'video': return 'from-rose-500 to-pink-600';
      case 'audio': return 'from-purple-500 to-indigo-600';
      case 'guide': return 'from-blue-500 to-indigo-600';
      default: return 'from-emerald-500 to-green-600';
    }
  };

  const handleDownload = () => {
    setHasDownloaded(true);
    // In a real app, this would trigger actual download
    console.log('Downloaded:', resource.title);
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    // In a real app, this would update the backend
    console.log('Favorited:', resource.title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Library</span>
        </button>
        
        <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl border border-sky-200/50 shadow-xl backdrop-blur-sm overflow-hidden">
          <div className={`bg-gradient-to-r ${getTypeColor()} p-8 text-white`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  {getTypeIcon()}
                </div>
                <div>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium uppercase tracking-wide">
                    {resource.type}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleFavorite}
                  className={`p-2 rounded-full transition-colors ${
                    isFavorited ? 'bg-yellow-400/20 text-yellow-300' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Star className={`h-5 w-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleDownload}
                  className={`p-2 rounded-full transition-colors ${
                    hasDownloaded ? 'bg-green-400/20 text-green-300' : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-3">{resource.title}</h1>
            <p className="text-white/90 text-lg mb-4">{resource.description}</p>
            <div className="flex items-center space-x-6 text-white/80">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {resource.duration}
              </span>
              <span className="flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-300 fill-current" />
                {resource.rating} rating
              </span>
              <span className="flex items-center">
                <Download className="h-4 w-4 mr-2" />
                {resource.downloads} downloads
              </span>
            </div>
          </div>
          
          <div className="p-8">
            {resource.type === 'video' ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
                  <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Video Content</h3>
                  <p className="text-slate-300 mb-6">{resource.duration} • HD Quality</p>
                  <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-xl hover:from-rose-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                    Play Video
                  </button>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-2xl p-6 border border-slate-200/50">
                  <h3 className="font-semibold text-slate-800 mb-3">Video Transcript</h3>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                    {resource.content}
                  </div>
                </div>
              </div>
            ) : resource.type === 'audio' ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 text-center border border-purple-200/50">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Headphones className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">Audio Content</h3>
                  <p className="text-purple-600 mb-6">{resource.duration} • High Quality Audio</p>
                  <button className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
                    Play Audio
                  </button>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-6 border border-slate-200/50">
                  <h3 className="font-semibold text-slate-800 mb-3">Audio Description</h3>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                    {resource.content}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200/50">
                <div className="prose prose-slate max-w-none">
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line text-lg">
                    {resource.content}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-8 flex justify-center space-x-4">
              <button
                onClick={handleDownload}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center
                  ${hasDownloaded
                    ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white'
                    : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700'
                  }
                `}
              >
                <Download className="h-4 w-4 mr-2" />
                {hasDownloaded ? 'Downloaded' : 'Download Resource'}
              </button>
              
              <button
                onClick={handleFavorite}
                className={`
                  px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center
                  ${isFavorited
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white'
                    : 'bg-gradient-to-r from-slate-200 to-slate-300 text-slate-700 hover:from-slate-300 hover:to-slate-400'
                  }
                `}
              >
                <Star className={`h-4 w-4 mr-2 ${isFavorited ? 'fill-current' : ''}`} />
                {isFavorited ? 'Favorited' : 'Add to Favorites'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}