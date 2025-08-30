import React, { useState } from 'react';
import { Brain, ArrowLeft, Play, CheckCircle, Clock, Star } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  category: string;
  completed: boolean;
}

interface CBTExercisesProps {
  onBack?: () => void;
}

export default function CBTExercises({ onBack }: CBTExercisesProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  
  const exercises: Exercise[] = [
    {
      id: '1',
      title: 'Thought Record for Money Anxiety',
      description: 'Identify and challenge negative thoughts about money using CBT techniques.',
      duration: '10-15 min',
      difficulty: 'Easy',
      category: 'Anxiety',
      completed: true
    },
    {
      id: '2',
      title: 'Financial Values Clarification',
      description: 'Explore your core values and how they relate to your financial decisions.',
      duration: '20 min',
      difficulty: 'Medium',
      category: 'Values',
      completed: false
    },
    {
      id: '3',
      title: 'Catastrophic Thinking Challenge',
      description: 'Learn to identify and reframe catastrophic thoughts about financial situations.',
      duration: '15 min',
      difficulty: 'Medium',
      category: 'Cognitive',
      completed: true
    },
    {
      id: '4',
      title: 'Mindful Spending Meditation',
      description: 'Practice mindfulness before making purchases to align with your intentions.',
      duration: '8 min',
      difficulty: 'Easy',
      category: 'Mindfulness',
      completed: false
    },
    {
      id: '5',
      title: 'Financial Shame Release',
      description: 'Work through feelings of shame around past financial mistakes with self-compassion.',
      duration: '25 min',
      difficulty: 'Advanced',
      category: 'Emotional',
      completed: false
    }
  ];

  const thoughtRecordSteps = [
    {
      title: 'Identify the Situation',
      content: 'Describe the financial situation that triggered anxiety or stress.',
      prompt: 'What happened? When and where did this occur?'
    },
    {
      title: 'Notice Your Emotions',
      content: 'Identify and rate the intensity of emotions you experienced.',
      prompt: 'What emotions did you feel? Rate each from 1-10.'
    },
    {
      title: 'Capture Your Thoughts',
      content: 'Write down the automatic thoughts that went through your mind.',
      prompt: 'What thoughts went through your mind? What were you telling yourself?'
    },
    {
      title: 'Examine the Evidence',
      content: 'Look for evidence that supports and contradicts your thoughts.',
      prompt: 'What evidence supports this thought? What evidence contradicts it?'
    },
    {
      title: 'Create a Balanced Thought',
      content: 'Develop a more balanced, realistic perspective.',
      prompt: 'What would be a more balanced way to think about this situation?'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-100 text-emerald-700';
      case 'Medium': return 'bg-amber-100 text-amber-700';
      case 'Advanced': return 'bg-rose-100 text-rose-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  if (selectedExercise) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedExercise(null)}
            className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Exercises</span>
          </button>
          
          <div className="bg-gradient-to-br from-white to-sky-50/50 rounded-3xl p-8 border border-sky-200/50 shadow-xl backdrop-blur-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent mb-2">
                {selectedExercise.title}
              </h2>
              <p className="text-slate-600">{selectedExercise.description}</p>
            </div>
            
            {selectedExercise.id === '1' && (
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-2">
                    {thoughtRecordSteps.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index <= currentStep ? 'bg-sky-500' : 'bg-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl p-6 border border-sky-200/50">
                  <h3 className="text-lg font-semibold text-sky-800 mb-3">
                    Step {currentStep + 1}: {thoughtRecordSteps[currentStep].title}
                  </h3>
                  <p className="text-sky-700 mb-4">{thoughtRecordSteps[currentStep].content}</p>
                  <p className="text-sm font-medium text-sky-600 mb-4">{thoughtRecordSteps[currentStep].prompt}</p>
                  
                  <textarea
                    className="w-full bg-white/80 border border-sky-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-300 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                    rows={4}
                    placeholder="Write your response here..."
                  />
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="bg-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (currentStep < thoughtRecordSteps.length - 1) {
                        setCurrentStep(currentStep + 1);
                      } else {
                        setSelectedExercise(null);
                        setCurrentStep(0);
                      }
                    }}
                    className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {currentStep < thoughtRecordSteps.length - 1 ? 'Next' : 'Complete Exercise'}
                  </button>
                </div>
              </div>
            )}
            
            {selectedExercise.id !== '1' && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">Exercise Coming Soon</h3>
                <p className="text-slate-600 mb-6">This exercise is being developed and will be available soon.</p>
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
                >
                  Back to Exercises
                </button>
              </div>
            )}
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
            CBT Exercises
          </h2>
          <p className="text-slate-600 text-lg">
            Evidence-based cognitive behavioral therapy tools for financial wellness
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-gradient-to-br from-white to-sky-50/50 rounded-2xl p-6 border border-sky-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(exercise.difficulty)}`}>
                  {exercise.difficulty}
                </span>
                <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs rounded-full font-medium">
                  {exercise.category}
                </span>
              </div>
              {exercise.completed && (
                <CheckCircle className="h-5 w-5 text-emerald-500" />
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-slate-800 mb-2">{exercise.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{exercise.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>{exercise.duration}</span>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedExercise(exercise)}
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold py-3 rounded-xl hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
            >
              <Play className="h-4 w-4 mr-2" />
              {exercise.completed ? 'Review Exercise' : 'Start Exercise'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}