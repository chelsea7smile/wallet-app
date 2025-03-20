import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faCreditCard, 
  faCheckCircle, 
  faStar, 
  faShoppingCart, 
  faMoneyBillWave, 
  faShoppingBasket, 
  faCoffee, 
  faTv, 
  faExchangeAlt, 
  faBook, 
  faMusic, 
  faHome, 
  faDumbbell,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';
import App from './App';
import reportWebVitals from './reportWebVitals';

library.add(
  faCreditCard,
  faCheckCircle,
  faStar,
  faShoppingCart,
  faMoneyBillWave,
  faShoppingBasket,
  faCoffee,
  faTv,
  faExchangeAlt,
  faBook,
  faMusic,
  faHome,
  faDumbbell,
  faArrowLeft
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
