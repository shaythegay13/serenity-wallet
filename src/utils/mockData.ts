import { Transaction, Budget } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    userId: '1',
    type: 'expense',
    amount: 45.50,
    category: 'Food',
    description: 'Organic groceries',
    date: new Date('2025-01-10'),
    tags: ['healthy', 'organic'],
    moodRating: 4
  },
  {
    id: '2',
    userId: '1',
    type: 'income',
    amount: 2500.00,
    category: 'Salary',
    description: 'Monthly salary',
    date: new Date('2025-01-01'),
  },
  {
    id: '3',
    userId: '1',
    type: 'expense',
    amount: 12.00,
    category: 'Transport',
    description: 'Bus pass',
    date: new Date('2025-01-09'),
    moodRating: 3
  },
  {
    id: '4',
    userId: '1',
    type: 'expense',
    amount: 85.99,
    category: 'Wellness',
    description: 'Yoga class membership',
    date: new Date('2025-01-08'),
    tags: ['self-care', 'wellness'],
    moodRating: 5
  },
  {
    id: '5',
    userId: '1',
    type: 'expense',
    amount: 150.00,
    category: 'Food',
    description: 'Weekly groceries',
    date: new Date('2025-01-07'),
    moodRating: 4
  },
  {
    id: '6',
    userId: '1',
    type: 'expense',
    amount: 30.00,
    category: 'Transport',
    description: 'Gas for car',
    date: new Date('2025-01-06'),
    moodRating: 3
  }
];

export const mockBudgets: Budget[] = [
  {
    id: '1',
    userId: '1',
    category: 'Food',
    limit: 400,
    spent: 195.50,
    period: 'monthly',
    color: '#10B981'
  },
  {
    id: '2',
    userId: '1',
    category: 'Transport',
    limit: 100,
    spent: 42.00,
    period: 'monthly',
    color: '#3B82F6'
  },
  {
    id: '3',
    userId: '1',
    category: 'Wellness',
    limit: 200,
    spent: 85.99,
    period: 'monthly',
    color: '#8B5CF6'
  },
  {
    id: '4',
    userId: '1',
    category: 'Entertainment',
    limit: 150,
    spent: 67.50,
    period: 'monthly',
    color: '#F59E0B'
  }
];