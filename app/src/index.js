import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/base.scss';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './components/ThemeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
);

// render(<Contact />, document.getElementById("contact-section"));