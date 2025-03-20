import { Transaction } from '../types';
import { 
  faShoppingCart, 
  faMoneyBillWave, 
  faShoppingBasket, 
  faCoffee, 
  faTv, 
  faExchangeAlt, 
  faBook, 
  faMusic, 
  faHome, 
  faDumbbell 
} from '@fortawesome/free-solid-svg-icons';

export const CARD_LIMIT = 1500;
export const CARD_BALANCE = 1234.56;
export const CARD_AVAILABLE = CARD_LIMIT - CARD_BALANCE;

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'Credit',
    amount: -150.00,
    name: 'IKEA',
    description: 'Furniture purchase',
    date: '2024-03-20',
    pending: true,
    authorizedUser: 'John Doe',
    icon: {
      background: '#4A90E2',
      name: faShoppingCart
    }
  },
  {
    id: '2',
    type: 'Payment',
    amount: 500.00,
    name: 'Salary',
    description: 'Monthly salary',
    date: '2024-03-19',
    pending: false,
    icon: {
      background: '#50E3C2',
      name: faMoneyBillWave
    }
  },
  {
    id: '3',
    type: 'Credit',
    amount: -75.50,
    name: 'Target',
    description: 'Groceries',
    date: '2024-03-18',
    pending: false,
    authorizedUser: 'Jane Smith',
    icon: {
      background: '#F5A623',
      name: faShoppingBasket
    }
  },
  {
    id: '4',
    type: 'Credit',
    amount: -25.00,
    name: 'Starbucks',
    description: 'Coffee and snacks',
    date: '2024-03-17',
    pending: false,
    icon: {
      background: '#9013FE',
      name: faCoffee
    }
  },
  {
    id: '5',
    type: 'Credit',
    amount: -200.00,
    name: 'Netflix',
    description: 'Subscription',
    date: '2024-03-16',
    pending: false,
    icon: {
      background: '#E35050',
      name: faTv
    }
  },
  {
    id: '6',
    type: 'Payment',
    amount: 1000.00,
    name: 'Transfer',
    description: 'From savings account',
    date: '2024-03-15',
    pending: false,
    icon: {
      background: '#417505',
      name: faExchangeAlt
    }
  },
  {
    id: '7',
    type: 'Credit',
    amount: -45.00,
    name: 'Amazon',
    description: 'Books',
    date: '2024-03-14',
    pending: false,
    icon: {
      background: '#FF9900',
      name: faBook
    }
  },
  {
    id: '8',
    type: 'Credit',
    amount: -30.00,
    name: 'Spotify',
    description: 'Premium subscription',
    date: '2024-03-13',
    pending: false,
    icon: {
      background: '#1DB954',
      name: faMusic
    }
  },
  {
    id: '9',
    type: 'Credit',
    amount: -85.00,
    name: 'Walmart',
    description: 'Household items',
    date: '2024-03-12',
    pending: false,
    icon: {
      background: '#0071DC',
      name: faHome
    }
  },
  {
    id: '10',
    type: 'Credit',
    amount: -150.00,
    name: 'Gym',
    description: 'Monthly membership',
    date: '2024-03-11',
    pending: false,
    icon: {
      background: '#FF4D4D',
      name: faDumbbell
    }
  }
]; 