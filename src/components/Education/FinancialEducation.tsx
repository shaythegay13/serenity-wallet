import React, { useState } from 'react';
import { BookOpen, Play, Clock, Star, CheckCircle, GraduationCap, TrendingUp, Target } from 'lucide-react';
import CourseViewer from './CourseViewer';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  rating: number;
  type: 'article' | 'video' | 'interactive';
  content: {
    sections: Array<{
      title: string;
      content: string;
      type: 'text' | 'video' | 'quiz';
    }>;
  };
}

export default function FinancialEducation() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  
  const courses: Course[] = [
    {
      id: '1',
      title: 'Budgeting Basics: Your First Financial Plan',
      description: 'Learn the fundamentals of creating and maintaining a budget that works for your lifestyle.',
      duration: '15 min',
      level: 'Beginner',
      progress: 100,
      rating: 4.8,
      type: 'article',
      content: {
        sections: [
          {
            title: 'What is a Budget?',
            content: 'A budget is a plan for how you will spend your money each month. It helps you track income and expenses, ensuring you live within your means and work toward your financial goals.\n\nThink of a budget as a roadmap for your money - it tells every dollar where to go before you spend it.',
            type: 'text'
          },
          {
            title: 'The 50/30/20 Rule',
            content: 'A simple budgeting framework:\n\n• 50% for needs (rent, groceries, utilities)\n• 30% for wants (entertainment, dining out)\n• 20% for savings and debt repayment\n\nThis rule provides a starting point that you can adjust based on your situation.',
            type: 'text'
          },
          {
            title: 'Creating Your First Budget',
            content: 'Step 1: Calculate your monthly income\nStep 2: List all your expenses\nStep 3: Categorize expenses as needs vs wants\nStep 4: Assign dollar amounts to each category\nStep 5: Track and adjust as needed',
            type: 'text'
          },
          {
            title: 'Knowledge Check',
            content: 'What percentage of income does the 50/30/20 rule suggest for savings?',
            type: 'quiz'
          }
        ]
      }
    },
    {
      id: '2',
      title: 'Understanding Investment Fundamentals',
      description: 'A comprehensive guide to stocks, bonds, and building a diversified portfolio.',
      duration: '25 min',
      level: 'Intermediate',
      progress: 60,
      rating: 4.9,
      type: 'video',
      content: {
        sections: [
          {
            title: 'Introduction to Investing',
            content: 'Welcome to investing basics! In this section, we\'ll cover why investing is important for building long-term wealth.',
            type: 'video'
          },
          {
            title: 'Types of Investments',
            content: 'Learn about different investment vehicles including stocks, bonds, mutual funds, and ETFs.',
            type: 'video'
          },
          {
            title: 'Risk and Return',
            content: 'Understanding the relationship between risk and potential returns in investing.',
            type: 'text'
          }
        ]
      }
    },
    {
      id: '3',
      title: 'Emergency Fund Calculator',
      description: 'Interactive tool to determine the right emergency fund size for your situation.',
      duration: '10 min',
      level: 'Beginner',
      progress: 0,
      rating: 4.7,
      type: 'interactive',
      content: {
        sections: [
          {
            title: 'Why Emergency Funds Matter',
            content: 'An emergency fund is money set aside for unexpected expenses like medical bills, car repairs, or job loss. It provides financial security and peace of mind.',
            type: 'text'
          },
          {
            title: 'Calculate Your Target',
            content: 'Most experts recommend 3-6 months of expenses. Use our calculator to find your ideal amount.',
            type: 'text'
          }
        ]
      }
    },
    {
      id: '4',
      title: 'Debt Payoff Strategies',
      description: 'Compare different approaches to paying off debt and find what works best for you.',
      duration: '20 min',
      level: 'Intermediate',
      progress: 30,
      rating: 4.6,
      type: 'article',
      content: {
        sections: [
          {
            title: 'Debt Avalanche Method',
            content: 'Pay minimum payments on all debts, then put extra money toward the debt with the highest interest rate. This method saves the most money over time.',
            type: 'text'
          },
          {
            title: 'Debt Snowball Method',
            content: 'Pay minimum payments on all debts, then put extra money toward the smallest debt balance. This method provides psychological wins and motivation.',
            type: 'text'
          }
        ]
      }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Topics' },
    { id: 'budgeting', label: 'Budgeting' },
    { id: 'investing', label: 'Investing' },
    { id: 'debt', label: 'Debt Management' },
    { id: 'planning', label: 'Financial Planning' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Play className="h-4 w-4" />;
      case 'interactive': return <Star className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-emerald-100 text-emerald-700';
      case 'Intermediate': return 'bg-amber-100 text-amber-700';
      case 'Advanced': return 'bg-rose-100 text-rose-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  if (selectedCourse) {
    return <CourseViewer course={selectedCourse} onBack={() => setSelectedCourse(null)} />;
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-3xl p-8 border border-emerald-200/50 shadow-xl">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg">
            <GraduationCap className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent mb-4">
            Financial Education
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Build your financial knowledge with curated courses, articles, and interactive tools. 
            Learn at your own pace with expert-designed content.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105
                ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg'
                  : 'bg-white/80 text-emerald-700 hover:bg-emerald-100/80 border border-emerald-200/50 shadow-md'
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-6 border border-emerald-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                  {getTypeIcon(course.type)}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(course.level)}`}>
                  {course.level}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-amber-400 fill-current" />
                <span className="text-sm text-slate-600 font-medium">{course.rating}</span>
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-slate-800 mb-2">{course.title}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{course.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              {course.progress > 0 && (
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm text-emerald-600 font-medium">{course.progress}% complete</span>
                </div>
              )}
            </div>
            
            {course.progress > 0 && (
              <div className="w-full bg-emerald-100 rounded-full h-2 mb-4">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            )}
            
            <button
              onClick={() => setSelectedCourse(course)}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Play className="h-4 w-4 mr-2" />
              {course.progress > 0 ? 'Continue' : 'Start'} Course
            </button>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 border border-sky-200/50 shadow-lg">
          <TrendingUp className="h-8 w-8 text-sky-600 mb-3" />
          <h3 className="font-bold text-sky-800 mb-2">Learning Progress</h3>
          <p className="text-2xl font-bold text-sky-700">75%</p>
          <p className="text-sm text-sky-600">3 of 4 courses completed</p>
        </div>
        
        <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border border-amber-200/50 shadow-lg">
          <Clock className="h-8 w-8 text-amber-600 mb-3" />
          <h3 className="font-bold text-amber-800 mb-2">Study Time</h3>
          <p className="text-2xl font-bold text-amber-700">8.5 hrs</p>
          <p className="text-sm text-amber-600">This month</p>
        </div>
        
        <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 border border-emerald-200/50 shadow-lg">
          <Target className="h-8 w-8 text-emerald-600 mb-3" />
          <h3 className="font-bold text-emerald-800 mb-2">Next Goal</h3>
          <p className="text-lg font-bold text-emerald-700">Investment Course</p>
          <p className="text-sm text-emerald-600">40% remaining</p>
        </div>
      </div>
    </div>
  );
}