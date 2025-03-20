import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5;
    padding: 10px;
  }

  .container {
    max-width: 100%;
    padding: 10px;
    margin: 0 auto;
  }

  .card {
    background: white;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .section-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
    color: #333;
  }

  .amount {
    font-weight: 600;
    &.positive {
      color: #4CAF50;
    }
    &.negative {
      color: #F44336;
    }
  }

  .pending-badge {
    background-color: #FFC107;
    color: #000;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 12px;
    margin-right: 8px;
  }

  .authorized-user {
    color: #666;
    font-size: 12px;
    margin-bottom: 4px;
  }
`; 