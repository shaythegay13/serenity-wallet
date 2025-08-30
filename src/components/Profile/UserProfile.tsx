import React, { useState } from 'react';
import { User, Settings, Shield, Bell, CreditCard, Download, Trash2, Edit } from 'lucide-react';

export default function UserProfile() {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 (555) 123-4567',
    timezone: 'Pacific Time (PT)',
    currency: 'USD',
    language: 'English'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'data', label: 'Data & Privacy', icon: Download }
  ];

  const securitySettings = [
    { title: 'Two-Factor Authentication', description: 'Add an extra layer of security', enabled: true },
    { title: 'Login Notifications', description: 'Get notified of new sign-ins', enabled: true },
    { title: 'Biometric Login', description: 'Use fingerprint or face recognition', enabled: false },
    { title: 'Session Timeout', description: 'Auto-logout after inactivity', enabled: true }
  ];

  const notificationSettings = [
    { title: 'Budget Alerts', description: 'When you approach budget limits', enabled: true },
    { title: 'Transaction Notifications', description: 'For all account activity', enabled: true },
    { title: 'Mindfulness Reminders', description: 'Daily wellness check-ins', enabled: true },
    { title: 'Educational Content', description: 'New courses and articles', enabled: false },
    { title: 'Community Updates', description: 'Forum replies and mentions', enabled: true }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-serenity-50 to-white rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
        
        <div className="flex space-x-1 bg-serenity-100/50 rounded-xl p-1 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`
                  flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center space-x-2
                  ${selectedTab === tab.id
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
      </div>

      {selectedTab === 'profile' && (
        <div className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center space-x-2 text-serenity-600 hover:text-serenity-700 transition-colors"
            >
              <Edit className="h-4 w-4" />
              <span>{isEditing ? 'Cancel' : 'Edit'}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({...profile, name: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                <select
                  value={profile.timezone}
                  onChange={(e) => setProfile({...profile, timezone: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                >
                  <option>Pacific Time (PT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Central Time (CT)</option>
                  <option>Eastern Time (ET)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select
                  value={profile.currency}
                  onChange={(e) => setProfile({...profile, currency: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>CAD</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                <select
                  value={profile.language}
                  onChange={(e) => setProfile({...profile, language: e.target.value})}
                  disabled={!isEditing}
                  className="serenity-input w-full disabled:bg-serenity-50/30"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>
          
          {isEditing && (
            <div className="mt-6 flex space-x-3">
              <button className="serenity-button">
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-sage-200 text-sage-700 px-4 py-2 rounded-xl hover:bg-sage-300 transition-colors font-medium"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}

      {selectedTab === 'security' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security Settings</h3>
            <div className="space-y-4">
              {securitySettings.map((setting, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-serenity-200/50 rounded-xl bg-white/50">
                  <div>
                    <p className="font-medium text-gray-900">{setting.title}</p>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                  <button
                    className={`
                      relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                      ${setting.enabled ? 'bg-gradient-to-r from-serenity-500 to-mint-500' : 'bg-sage-200'}
                    `}
                  >
                    <span
                      className={`
                        inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                        ${setting.enabled ? 'translate-x-6' : 'translate-x-1'}
                      `}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white to-sage-50/30 rounded-2xl p-6 border border-sage-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Password & Authentication</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 border border-sage-200/50 rounded-xl hover:bg-sage-50/30 transition-all duration-200 bg-white/50">
                <p className="font-medium text-gray-900">Change Password</p>
                <p className="text-sm text-gray-600">Update your account password</p>
              </button>
              <button className="w-full text-left p-3 border border-sage-200/50 rounded-xl hover:bg-sage-50/30 transition-all duration-200 bg-white/50">
                <p className="font-medium text-gray-900">Manage Connected Devices</p>
                <p className="text-sm text-gray-600">View and manage logged-in devices</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'notifications' && (
        <div className="bg-gradient-to-br from-white to-mint-50/30 rounded-2xl p-6 border border-mint-200/50 shadow-soft">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-mint-200/50 rounded-xl bg-white/50">
                <div>
                  <p className="font-medium text-gray-900">{setting.title}</p>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <button
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-colors
                    ${setting.enabled ? 'bg-gradient-to-r from-mint-500 to-sage-500' : 'bg-sage-200'}
                  `}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white transition-transform
                      ${setting.enabled ? 'translate-x-6' : 'translate-x-1'}
                    `}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedTab === 'data' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-white to-serenity-50/30 rounded-2xl p-6 border border-serenity-200/50 shadow-soft">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-all duration-200 bg-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Export Your Data</p>
                    <p className="text-sm text-gray-600">Download all your account data</p>
                  </div>
                  <Download className="h-5 w-5 text-gray-400" />
                </div>
              </button>
              
              <button className="w-full text-left p-4 border border-serenity-200/50 rounded-xl hover:bg-serenity-50/30 transition-all duration-200 bg-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Privacy Settings</p>
                    <p className="text-sm text-gray-600">Manage data sharing preferences</p>
                  </div>
                  <Settings className="h-5 w-5 text-gray-400" />
                </div>
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300/50 rounded-2xl p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Danger Zone</h3>
            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors">
              <Trash2 className="h-4 w-4" />
              <span>Delete Account</span>
            </button>
            <p className="text-sm text-red-700 mt-2">
              This action cannot be undone. All your data will be permanently deleted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}