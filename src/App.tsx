import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import CardBalance from './components/CardBalance';
// import PaymentStatus from './components/PaymentStatus';
import TransactionsList from './components/TransactionsList';
import TransactionDetail from './components/TransactionDetail';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <div className="container">
        <Routes>
          <Route path="/" element={
            <>
              <CardBalance />
              <TransactionsList />
            </>
          } />
          <Route path="/transaction/:id" element={<TransactionDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
