import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type TransactionType = 'Payment' | 'Credit';

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser?: string;
  icon: {
    background: string;
    name: IconProp;
  };
}

export interface CardBalance {
  limit: number;
  balance: number;
  available: number;
}

export interface DailyPoints {
  points: number;
  formattedPoints: string;
} 