import React from 'react';
import { Wallet, Bell, Menu, User } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
  user?: { name: string };
}

export default function Header({ onMenuToggle, user }: HeaderProps) {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-serenity-100 px-4 py-3 sm:px-6 shadow-soft">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-serenity-50 transition-colors"
          >
            <Menu className="h-5 w-5 text-serenity-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 serenity-gradient rounded-xl flex items-center justify-center shadow-glow">
              <Wallet className="h-4 w-4 text-white" />
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-serenity-700 to-mint-700 bg-clip-text text-transparent hidden sm:block">
              Serenity Wallet
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-xl hover:bg-serenity-50 transition-colors relative">
            <Bell className="h-5 w-5 text-serenity-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full shadow-glow"></span>
          </button>
          
          <div className="flex items-center space-x-2 pl-4 border-l border-serenity-200">
            <div className="w-8 h-8 bg-gradient-to-br from-sage-100 to-mint-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-serenity-600" />
            </div>
            <span className="text-sm text-serenity-700 hidden sm:block font-medium">
              {user?.name || 'Welcome'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}