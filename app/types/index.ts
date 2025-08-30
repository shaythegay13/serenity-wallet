export interface User {
  id: string;
  email: string;
  name: string;
  walletBalance: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
  tags?: string[];
  moodRating?: number;
}

export interface Budget {
  id: string;
  userId: string;
  category: string;
  limit: number;
  spent: number;
  period: 'weekly' | 'monthly';
  color: string;
}

export interface MindfulnessPrompt {
  id: string;
  title: string;
  content: string;
  category: 'spending' | 'saving' | 'reflection';
}