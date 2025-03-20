import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams, useNavigate } from 'react-router-dom';
import { mockTransactions } from '../data/mockData';

const DetailContainer = styled.div`
  padding: 16px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
`;

const BackIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const DetailCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TransactionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TransactionIcon = styled.div<{ background: string }>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: white;
  font-size: 24px;
`;

const TransactionTitle = styled.h2`
  font-size: 20px;
  color: #333;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.div`
  color: #666;
  font-size: 14px;
`;

const DetailValue = styled.div<{ type?: 'Payment' | 'Credit' }>`
  font-weight: 600;
  color: ${props => props.type === 'Payment' ? '#4CAF50' : props.type === 'Credit' ? '#F44336' : '#333'};
`;

interface TransactionDetailProps {
  transaction: {
    id: string;
    name: string;
    amount: number;
    type: 'Payment' | 'Credit';
    description: string;
    date: string;
    pending: boolean;
    authorizedUser?: string;
    icon: {
      name: any;
      background: string;
    };
  };
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction }) => {
  const navigate = useNavigate();

  return (
    <DetailContainer>
      <BackButton onClick={() => navigate('/')}>
        <BackIcon icon="arrow-left" />
        Back to Transactions
      </BackButton>
      <DetailCard>
        <TransactionHeader>
          <TransactionIcon background={transaction.icon.background}>
            <FontAwesomeIcon icon={transaction.icon.name} />
          </TransactionIcon>
          <TransactionTitle>{transaction.name}</TransactionTitle>
        </TransactionHeader>
        <DetailRow>
          <DetailLabel>Amount</DetailLabel>
          <DetailValue type={transaction.type}>
            {transaction.type === 'Payment' ? '+' : ''}{transaction.amount.toFixed(2)}
          </DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Type</DetailLabel>
          <DetailValue>{transaction.type}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Description</DetailLabel>
          <DetailValue>{transaction.description}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Date</DetailLabel>
          <DetailValue>{new Date(transaction.date).toLocaleDateString()}</DetailValue>
        </DetailRow>
        <DetailRow>
          <DetailLabel>Status</DetailLabel>
          <DetailValue>{transaction.pending ? 'Pending' : 'Completed'}</DetailValue>
        </DetailRow>
        {transaction.authorizedUser && (
          <DetailRow>
            <DetailLabel>Authorized User</DetailLabel>
            <DetailValue>{transaction.authorizedUser}</DetailValue>
          </DetailRow>
        )}
      </DetailCard>
    </DetailContainer>
  );
};

const TransactionDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const transaction = mockTransactions.find(t => t.id === id);

  if (!transaction) {
    return <div>Transaction not found</div>;
  }

  return <TransactionDetail transaction={transaction} />;
};

export default TransactionDetailContainer; 