import React, { useState } from 'react';
import { GraduationCap, Clock, CheckCircle, Star, Play, BookOpen, Award } from 'lucide-react';

interface LearningPath {
  id: string;
  title: string;
  description: string;
  modules: number;
  duration: string;
  progress: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export default function SelfGuidedLearning() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const learningPaths: LearningPath[] = [
    {
      id: '1',
      title: 'Financial Mindfulness Mastery',
      description: 'Learn to develop a healthy relationship with money through mindfulness practices.',
      modules: 8,
      duration: '4 weeks',
      progress: 75,
      difficulty: 'Beginner',
      category: 'mindfulness'
    },
    {
      id: '2',
      title: 'Cognitive Restructuring for Money Anxiety',
      description: 'CBT techniques specifically designed to address financial stress and anxiety.',
      modules: 12,
      duration: '6 weeks',
      progress: 40,
      difficulty: 'Intermediate',
      category: 'cbt'
    },
    {
      id: '3',
      title: 'Building Wealth with Purpose',
      description: 'Align your financial goals with your values and life purpose.',
      modules: 10,
      duration: '5 weeks',
      progress: 0,
      difficulty: 'Intermediate',
      category: 'planning'
    },
    {
      id: '4',
      title: 'Emotional Intelligence in Finance',
      description: 'Understand and manage emotions that drive financial decisions.',
      modules: 6,
      duration: '3 weeks',
      progress: 100,
      difficulty: 'Beginner',
      category: 'emotional'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Paths' },
    { id: 'mindfulness', label: 'Mindfulness' },
    { id: 'cbt', label: 'CBT Techniques' },
    { id: 'planning', label: 'Financial Planning' },
    { id: 'emotional', label: 'Emotional Wellness' }
  ];

  const achievements = [
    { title: 'First Journal Entry', description: 'Completed your first financial reflection', earned: true },
    { title: 'Budget Master', description: 'Stayed within budget for 30 days', earned: true },
    { title: 'Mindful Spender', description: 'Used mindful spending techniques 10 times', earned: false },
    { title: 'Investment Explorer', description: 'Completed investment basics course', earned: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-700';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'Advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const filteredPaths = selectedCategory === 'all' 
    ? learningPaths 
    : learningPaths.filter(path => path.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-sage-50 to-mint-50 rounded-2xl p-6 border border-sage-200/50 shadow-soft">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Self-Guided Learning</h2>
        <p className="text-gray-600 mb-6">
          Personalized learning paths to develop financial wellness and emotional intelligence.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-colors
                ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-sage-500 to-mint-500 text-white shadow-soft'
                  : 'bg-white/70 text-sage-700 hover:bg-sage-100/70 border border-sage-200/50'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPaths.map((path) => (
              <div key={path.id} className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-sage-600" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(path.difficulty)}`}>
                      {path.difficulty}
                    </span>
                  </div>
                  {path.progress === 100 && (
                    <Award className="h-5 w-5 text-gold-500" />
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{path.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {path.modules} modules
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {path.duration}
                    </span>
                  </div>
                </div>
                
                {path.progress > 0 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">{path.progress}%</span>
                    </div>
                    <div className="w-full bg-serenity-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-sage-500 to-mint-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
                
                <button className="serenity-button w-full flex items-center justify-center">
                  {path.progress === 100 ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Review
                    </>
                  ) : path.progress > 0 ? (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Continue
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-gold-50 to-serenity-50 rounded-2xl p-6 border border-gold-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-gold-600" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className={`
                  flex items-start space-x-3 p-3 rounded-xl transition-all duration-200
                  ${achievement.earned ? 'bg-gradient-to-r from-mint-50 to-sage-50 border border-mint-200' : 'bg-white/50 border border-serenity-200/50'}
                `}>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center
                    ${achievement.earned ? 'bg-gradient-to-br from-mint-500 to-sage-500' : 'bg-serenity-300'}
                  `}>
                    {achievement.earned ? (
                      <CheckCircle className="h-4 w-4 text-white" />
                    ) : (
                      <Star className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div>
                    <p className={`text-sm font-medium ${achievement.earned ? 'text-green-900' : 'text-gray-700'}`}>
                      {achievement.title}
                    </p>
                    <p className={`text-xs ${achievement.earned ? 'text-green-700' : 'text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-serenity-50 to-white rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Courses Completed</span>
                <span className="font-semibold text-gray-900">3/8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Study Streak</span>
                <span className="font-semibold text-gray-900">7 days</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total Study Time</span>
                <span className="font-semibold text-gray-900">12.5 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}