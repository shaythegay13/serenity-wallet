import React from 'react';
import { Shield, Phone, MessageCircle, Heart, AlertTriangle, Clock } from 'lucide-react';

export default function CrisisSupport() {
  const emergencyContacts = [
    {
      name: 'National Suicide Prevention Lifeline',
      number: '988',
      description: '24/7 crisis support for mental health emergencies',
      type: 'mental-health'
    },
    {
      name: 'Crisis Text Line',
      number: 'Text HOME to 741741',
      description: 'Free, 24/7 crisis support via text message',
      type: 'text'
    },
    {
      name: 'Financial Counseling Hotline',
      number: '1-800-388-2227',
      description: 'Free financial counseling and debt management support',
      type: 'financial'
    },
    {
      name: 'SAMHSA National Helpline',
      number: '1-800-662-4357',
      description: 'Treatment referral and information service',
      type: 'mental-health'
    }
  ];

  const quickActions = [
    {
      title: 'Breathing Exercise',
      description: 'Quick 3-minute breathing technique to reduce anxiety',
      action: 'Start Exercise',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Emergency Budget',
      description: 'Create a crisis budget to manage immediate financial needs',
      action: 'Create Budget',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Find Local Resources',
      description: 'Locate nearby financial assistance and mental health services',
      action: 'Find Resources',
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  const selfCareStrategies = [
    'Take slow, deep breaths for 2 minutes',
    'Remind yourself: "This feeling is temporary"',
    'Reach out to a trusted friend or family member',
    'Focus on what you can control right now',
    'Practice self-compassion - treat yourself with kindness',
    'Consider professional help if feelings persist'
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300/50 rounded-2xl p-6 shadow-soft">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-red-900 mb-2">Crisis Support</h2>
            <p className="text-red-800 mb-4">
              If you're experiencing a mental health crisis or having thoughts of self-harm, please reach out for immediate help.
            </p>
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl inline-block shadow-glow">
              <p className="font-semibold">Emergency: Call 911 or go to your nearest emergency room</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white to-serenity-50 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Phone className="h-5 w-5 mr-2 text-serenity-600" />
          24/7 Crisis Hotlines
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="border border-serenity-200/50 rounded-xl p-4 hover:bg-serenity-50/30 transition-all duration-200 bg-white/70">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{contact.name}</h4>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-mint-600" />
                  <span className="text-xs text-mint-600 font-medium">24/7</span>
                </div>
              </div>
              <p className="text-serenity-600 font-mono text-lg mb-2">{contact.number}</p>
              <p className="text-gray-600 text-sm">{contact.description}</p>
              <button className="mt-3 w-full serenity-button flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-mint-50 to-sage-50 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Heart className="h-5 w-5 mr-2 text-sage-600" />
          Immediate Self-Care
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white p-4 rounded-lg transition-colors text-left`}
            >
              <h4 className="font-semibold mb-2">{action.title}</h4>
              <p className="text-sm opacity-90 mb-3">{action.description}</p>
              <span className="text-sm font-medium">{action.action} →</span>
            </button>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-sage-50 to-mint-50 border border-sage-200/50 rounded-xl p-4">
          <h4 className="font-semibold text-sage-900 mb-3">Grounding Techniques</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {selfCareStrategies.map((strategy, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-sage-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-sm text-sage-800">{strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-white to-serenity-50 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-mint-600" />
          Professional Support
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Financial Counselors</h4>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900">National Foundation for Credit Counseling</p>
                <p className="text-sm text-gray-600">Free and low-cost financial counseling</p>
                <button className="mt-2 text-serenity-600 hover:text-serenity-700 text-sm font-medium">
                  Find a Counselor →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900">Financial Planning Association</p>
                <p className="text-sm text-gray-600">Connect with certified financial planners</p>
                <button className="mt-2 text-serenity-600 hover:text-serenity-700 text-sm font-medium">
                  Find a Planner →
                </button>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-gray-900">Mental Health Support</h4>
            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900">Psychology Today</p>
                <p className="text-sm text-gray-600">Find therapists specializing in financial stress</p>
                <button className="mt-2 text-serenity-600 hover:text-serenity-700 text-sm font-medium">
                  Find a Therapist →
                </button>
              </div>
              <div className="border border-gray-200 rounded-lg p-3">
                <p className="font-medium text-gray-900">BetterHelp</p>
                <p className="text-sm text-gray-600">Online therapy and counseling services</p>
                <button className="mt-2 text-serenity-600 hover:text-serenity-700 text-sm font-medium">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}