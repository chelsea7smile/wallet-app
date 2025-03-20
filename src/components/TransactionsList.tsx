import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Transaction } from '../types';
import transactionsData from '../data/transactions.json';
import './TransactionsList.css';

const TransactionsContainer = styled.div``;

const TransactionIcon: React.FC<{ background: string; icon: any; type: string }> = ({ background, icon, type }) => (
  <div className="transaction-icon" style={{ backgroundColor: type === 'Payment' ? '#4CAF50' : background }}>
    <FontAwesomeIcon icon={icon} />
  </div>
);

const TransactionInfo: React.FC<{ transaction: Transaction }> = ({ transaction }) => (
  <div className="transaction-info">
    <div className="transaction-name">{transaction.name}</div>
    <div className="transaction-description">
      {transaction.pending && <span className="pending-badge">Pending</span>}
      {transaction.description}
    </div>
    {transaction.authorizedUser && (
      <div className="authorized-user">{transaction.authorizedUser}</div>
    )}
    <div className="transaction-date">{formatDate(transaction.date)}</div>
  </div>
);

const TransactionItem: React.FC<{ transaction: Transaction; onClick: () => void }> = ({ transaction, onClick }) => (
  <div className="transaction-item" onClick={onClick}>
    <TransactionIcon background={transaction.icon.background} icon={transaction.icon.name} type={transaction.type} />
    <TransactionInfo transaction={transaction} />
    <div className="transaction-amount">
      {transaction.type === 'Payment' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
    </div>
  </div>
);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1);

  if (date >= startOfWeek && date <= today) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  } else {
    return date.toLocaleDateString();
  }
};

const TransactionsList: React.FC<{ transactions: Transaction[] }> = ({ transactions }) => {
  const navigate = useNavigate();

  const handleTransactionClick = (id: string) => {
    navigate(`/transaction/${id}`);
  };

  return (
    <TransactionsContainer>
      <h2 className="section-title">Latest Transactions</h2>
      {transactions.map((transaction: Transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} onClick={() => handleTransactionClick(transaction.id)} />
      ))}
    </TransactionsContainer>
  );
};

const TransactionsListContainer: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(transactionsData as Transaction[]);
  }, []);

  return <TransactionsList transactions={transactions} />;
};

export default TransactionsListContainer; 