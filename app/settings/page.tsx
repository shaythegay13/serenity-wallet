'use client'

import { UserButton } from "@clerk/nextjs";
import Header from '../components/Layout/Header';
import Sidebar from '../components/Layout/Sidebar';
import { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  HelpCircle, 
  Download, 
  Eye, 
  EyeOff,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock,
  Globe,
  CreditCard,
  Trash2,
  Save,
  Heart
} from 'lucide-react';

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({ name: 'User' });
  const [activeTab, setActiveTab] = useState('account');
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    budgetAlerts: true,
    mindfulnessReminders: true,
    educationalContent: false,
    communityUpdates: true
  });
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    dataSharing: false,
    analytics: true,
    marketing: false
  });

  const tabs = [
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield },
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'help', label: 'Help & Support', icon: HelpCircle }
  ];

  const accountInfo = {
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    timezone: 'Pacific Time (PT)',
    currency: 'USD',
    language: 'English'
  };

  const renderAccountTab = () => (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-serenity-800">Personal Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 text-serenity-600 hover:text-serenity-700 transition-colors"
          >
            {isEditing ? <Save className="h-4 w-4" /> : <User className="h-4 w-4" />}
            <span>{isEditing ? 'Save' : 'Edit'}</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              defaultValue={accountInfo.name}
              disabled={!isEditing}
              className="serenity-input w-full disabled:bg-serenity-50/30"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              defaultValue={accountInfo.email}
              disabled={!isEditing}
              className="serenity-input w-full disabled:bg-serenity-50/30"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue={accountInfo.phone}
              disabled={!isEditing}
              className="serenity-input w-full disabled:bg-serenity-50/30"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
            <select
              defaultValue={accountInfo.timezone}
              disabled={!isEditing}
              className="serenity-input w-full disabled:bg-serenity-50/30"
            >
              <option value="Pacific Time (PT)">Pacific Time (PT)</option>
              <option value="Mountain Time (MT)">Mountain Time (MT)</option>
              <option value="Central Time (CT)">Central Time (CT)</option>
              <option value="Eastern Time (ET)">Eastern Time (ET)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Security</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Lock className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                <p className="text-sm text-gray-600">Add an extra layer of security</p>
              </div>
            </div>
            <button className="serenity-button px-4 py-2">Enable</button>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">Biometric Login</h4>
                <p className="text-sm text-gray-600">Use fingerprint or face recognition</p>
              </div>
            </div>
            <button className="serenity-button px-4 py-2">Enable</button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Notification Channels</h3>
        
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
              <div className="flex items-center space-x-3">
                {key === 'email' && <Mail className="h-5 w-5 text-serenity-600" />}
                {key === 'push' && <Bell className="h-5 w-5 text-serenity-600" />}
                {key === 'sms' && <Smartphone className="h-5 w-5 text-serenity-600" />}
                {key === 'budgetAlerts' && <CreditCard className="h-5 w-5 text-serenity-600" />}
                {key === 'mindfulnessReminders' && <Heart className="h-5 w-5 text-serenity-600" />}
                {key === 'educationalContent' && <Globe className="h-5 w-5 text-serenity-600" />}
                {key === 'communityUpdates' && <User className="h-5 w-5 text-serenity-600" />}
                <div>
                  <h4 className="font-medium text-gray-900 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {key === 'email' && 'Receive notifications via email'}
                    {key === 'push' && 'Receive push notifications'}
                    {key === 'sms' && 'Receive SMS notifications'}
                    {key === 'budgetAlerts' && 'Get alerts when approaching budget limits'}
                    {key === 'mindfulnessReminders' && 'Daily wellness check-in reminders'}
                    {key === 'educationalContent' && 'New courses and articles'}
                    {key === 'communityUpdates' && 'Forum replies and mentions'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setNotifications({...notifications, [key]: !value})}
                className={`w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-serenity-500' : 'bg-gray-300'
                }`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  value ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Privacy Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
            <select
              value={privacy.profileVisibility}
              onChange={(e) => setPrivacy({...privacy, profileVisibility: e.target.value})}
              className="serenity-input w-full"
            >
              <option value="public">Public</option>
              <option value="friends">Friends Only</option>
              <option value="private">Private</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Download className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">Data Sharing</h4>
                <p className="text-sm text-gray-600">Allow sharing of anonymous data for research</p>
              </div>
            </div>
            <button
              onClick={() => setPrivacy({...privacy, dataSharing: !privacy.dataSharing})}
              className={`w-12 h-6 rounded-full transition-colors ${
                privacy.dataSharing ? 'bg-serenity-500' : 'bg-gray-300'
              }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                privacy.dataSharing ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Data Management</h3>
        
        <div className="space-y-4">
          <button className="w-full serenity-button flex items-center justify-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export My Data</span>
          </button>
          
          <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-colors flex items-center justify-center space-x-2">
            <Trash2 className="h-4 w-4" />
            <span>Delete My Account</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Theme Settings</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Sun className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">Light Mode</h4>
                <p className="text-sm text-gray-600">Clean, bright interface</p>
              </div>
            </div>
            <button
              onClick={() => setTheme('light')}
              className={`w-4 h-4 rounded-full border-2 ${
                theme === 'light' ? 'bg-serenity-500 border-serenity-500' : 'border-gray-300'
              }`}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Moon className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">Dark Mode</h4>
                <p className="text-sm text-gray-600">Easy on the eyes</p>
              </div>
            </div>
            <button
              onClick={() => setTheme('dark')}
              className={`w-4 h-4 rounded-full border-2 ${
                theme === 'dark' ? 'bg-serenity-500 border-serenity-500' : 'border-gray-300'
              }`}
            />
          </div>
          
          <div className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl">
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-serenity-600" />
              <div>
                <h4 className="font-medium text-gray-900">System Default</h4>
                <p className="text-sm text-gray-600">Follow your system settings</p>
              </div>
            </div>
            <button
              onClick={() => setTheme('system')}
              className={`w-4 h-4 rounded-full border-2 ${
                theme === 'system' ? 'bg-serenity-500 border-serenity-500' : 'border-gray-300'
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderHelpTab = () => (
    <div className="space-y-6">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">Help & Support</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-2">Getting Started Guide</h4>
              <p className="text-sm text-gray-600">Learn the basics of Serenity Wallet</p>
            </button>
            
            <button className="p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-2">FAQ</h4>
              <p className="text-sm text-gray-600">Find answers to common questions</p>
            </button>
            
            <button className="p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-2">Contact Support</h4>
              <p className="text-sm text-gray-600">Get help from our support team</p>
            </button>
            
            <button className="p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-colors text-left">
              <h4 className="font-medium text-gray-900 mb-2">Feature Requests</h4>
              <p className="text-sm text-gray-600">Suggest new features</p>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
        <h3 className="text-lg font-semibold text-serenity-800 mb-6">App Information</h3>
        
        <div className="space-y-2 text-sm text-gray-600">
          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Build:</strong> 2024.1.1</p>
          <p><strong>Last Updated:</strong> January 15, 2024</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-50 via-white to-mint-50">
      <div className="flex justify-end p-4">
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10 rounded-full",
              userButtonPopoverCard: "bg-white/90 backdrop-blur-md rounded-2xl shadow-glow border border-white/20"
            }
          }}
        />
      </div>
      
      <Header 
        user={user}
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        
        <main className="flex-1 p-6 transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-serenity-800 mb-2">Settings</h1>
              <p className="text-sage-600">Manage your account preferences and security settings</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-soft">
              <div className="flex space-x-1 bg-serenity-100/50 rounded-xl p-1 mb-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-2
                        ${activeTab === tab.id
                          ? 'bg-white text-serenity-600 shadow-soft'
                          : 'text-sage-600 hover:text-sage-900'
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
              
              {activeTab === 'account' && renderAccountTab()}
              {activeTab === 'notifications' && renderNotificationsTab()}
              {activeTab === 'privacy' && renderPrivacyTab()}
              {activeTab === 'appearance' && renderAppearanceTab()}
              {activeTab === 'help' && renderHelpTab()}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
