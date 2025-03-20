import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CARD_BALANCE, CARD_AVAILABLE } from '../data/mockData';
import { calculateDailyPoints } from '../utils/pointsCalculator';

const Container = styled.div`
  display: flex;
  background: #f5f5f5;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
  height: auto;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  border-radius: 8px;
  padding: 10px;
  position: relative;
  height: 250px;
`;

const CardBalanceBlock = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PointsBlock = styled.div`
  background: white;
  border-radius: 8px;
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const BalanceAmount = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin: 8px 0;
`;

const AvailableAmount = styled.div`
  color: #999;
`;

const PointsAmount = styled.div`
  color: #999;
`;

const CheckCircle = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CheckIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 28px;
  align-items: center;

`;

const Title = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Subtitle = styled.div`
  color: #999;
  margin-top: 18px;
  position: absolute;
`;

const CardBalance: React.FC = () => {
  const { formattedPoints } = calculateDailyPoints();
  const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <Container>
      <LeftSection>
        <CardBalanceBlock>
          <div>Card Balance</div>
          <BalanceAmount>${CARD_BALANCE.toFixed(2)}</BalanceAmount>
          <AvailableAmount>${CARD_AVAILABLE.toFixed(2)} Available</AvailableAmount>
        </CardBalanceBlock>
        <PointsBlock>
          <div>Daily Points</div>
          <PointsAmount>{formattedPoints}</PointsAmount>
        </PointsBlock>
      </LeftSection>
      <RightSection>
        <Title>No Payment Due</Title>
        <Subtitle>You've paid your <br />{currentMonth} balance.</Subtitle>
        <CheckCircle>
          <CheckIcon icon={faCheck} />
        </CheckCircle>
      </RightSection>
    </Container>
  );
};

export default CardBalance; 