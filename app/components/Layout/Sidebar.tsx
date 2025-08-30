import React from 'react';
import { 
  Home, 
  CreditCard, 
  TrendingUp, 
  Target, 
  Heart, 
  Settings,
  LogOut,
  Brain,
  BookOpen,
  PieChart,
  GraduationCap,
  Users,
  Library,
  Shield,
  BarChart3,
  User
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  currentView: string;
  onViewChange: (view: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'finances', label: 'Finances', icon: CreditCard },
  { id: 'analytics', label: 'Analytics & Progress', icon: BarChart3 },
  { id: 'cbt-tools', label: 'CBT Tools', icon: Brain },
  { id: 'education', label: 'Financial Education', icon: BookOpen },
  { id: 'learning', label: 'Self-Guided Learning', icon: GraduationCap },
  { id: 'community', label: 'Community', icon: Users },
  { id: 'library', label: 'Content Library', icon: Library },
  { id: 'crisis', label: 'Crisis Support', icon: Shield },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ isOpen, currentView, onViewChange }: SidebarProps) {
  return (
    <aside className={`
      bg-white/90 backdrop-blur-md border-r border-serenity-100 transition-all duration-300 ease-in-out shadow-soft
      ${isOpen ? 'w-64' : 'w-16'} 
      ${isOpen ? 'lg:w-64' : 'lg:w-64'}
      fixed lg:sticky top-16 h-[calc(100vh-4rem)] z-40
    `}>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`
                w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left
                transition-all duration-200 ease-in-out
                ${isActive 
                  ? 'bg-gradient-to-r from-serenity-50 to-mint-50 text-serenity-700 border-l-4 border-serenity-500 shadow-soft' 
                  : 'text-sage-600 hover:bg-serenity-50/50 hover:text-serenity-700'
                }
              `}
            >
              <Icon className={`h-5 w-5 ${isActive ? 'text-serenity-600' : 'text-sage-500'}`} />
              <span className={`
                font-medium transition-opacity duration-200
                ${isOpen || 'lg:block' ? 'opacity-100' : 'opacity-0 lg:opacity-100'}
                ${isOpen || 'hidden lg:inline'}
              `}>
                {item.label}
              </span>
            </button>
          );
        })}
        
        <div className="border-t border-gray-100 mt-6 pt-6">
          <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50/50 transition-colors">
            <LogOut className="h-5 w-5" />
            <span className={`
              font-medium transition-opacity duration-200
              ${isOpen || 'lg:block' ? 'opacity-100' : 'opacity-0 lg:opacity-100'}
              ${isOpen || 'hidden lg:inline'}
            `}>
              Sign Out
            </span>
          </button>
        </div>
      </nav>
    </aside>
  );
}