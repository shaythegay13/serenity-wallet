import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle, Clock, Star, BookOpen, Video, FileText } from 'lucide-react';

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

interface CourseViewerProps {
  course: Course;
  onBack: () => void;
}

export default function CourseViewer({ course, onBack }: CourseViewerProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [completedSections, setCompletedSections] = useState<number[]>([]);

  const handleCompleteSection = () => {
    if (!completedSections.includes(currentSection)) {
      setCompletedSections([...completedSections, currentSection]);
    }
    if (currentSection < course.content.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const currentSectionData = course.content.sections[currentSection];
  const progress = (completedSections.length / course.content.sections.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Courses</span>
        </button>
        
        <div className="bg-gradient-to-br from-white to-emerald-50/50 rounded-3xl border border-emerald-200/50 shadow-xl backdrop-blur-sm overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-8 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {course.type === 'video' ? (
                  <Video className="h-6 w-6" />
                ) : course.type === 'interactive' ? (
                  <Star className="h-6 w-6" />
                ) : (
                  <BookOpen className="h-6 w-6" />
                )}
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {course.level}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-300 fill-current" />
                <span className="text-sm">{course.rating}</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
            <p className="text-emerald-100 mb-4">{course.description}</p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {course.duration}
              </span>
              <span>{course.content.sections.length} sections</span>
            </div>
          </div>
          
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-slate-800">
                Section {currentSection + 1}: {currentSectionData.title}
              </h2>
              <div className="text-sm text-slate-600">
                {completedSections.length} / {course.content.sections.length} completed
              </div>
            </div>
            
            <div className="w-full bg-emerald-100 rounded-full h-2 mb-8">
              <div
                className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-6 border border-emerald-200/50 mb-6">
              {currentSectionData.type === 'video' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Play className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Video Content</h3>
                  <p className="text-slate-600 mb-4">{currentSectionData.content}</p>
                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300">
                    Play Video
                  </button>
                </div>
              ) : currentSectionData.type === 'quiz' ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">Knowledge Check</h3>
                  <div className="space-y-3">
                    <div className="p-4 border border-emerald-200 rounded-xl hover:bg-emerald-50/50 transition-colors cursor-pointer">
                      <p className="text-slate-700">A) Create a detailed budget and stick to it rigidly</p>
                    </div>
                    <div className="p-4 border border-emerald-200 rounded-xl hover:bg-emerald-50/50 transition-colors cursor-pointer">
                      <p className="text-slate-700">B) Practice mindful awareness of spending triggers</p>
                    </div>
                    <div className="p-4 border border-emerald-200 rounded-xl hover:bg-emerald-50/50 transition-colors cursor-pointer">
                      <p className="text-slate-700">C) Avoid thinking about money altogether</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="prose prose-slate max-w-none">
                  <div className="text-slate-700 leading-relaxed whitespace-pre-line">
                    {currentSectionData.content}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="bg-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <button
                onClick={handleCompleteSection}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
              >
                {completedSections.includes(currentSection) ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {currentSection < course.content.sections.length - 1 ? 'Next Section' : 'Course Complete'}
                  </>
                ) : (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {currentSection < course.content.sections.length - 1 ? 'Complete & Continue' : 'Complete Course'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}