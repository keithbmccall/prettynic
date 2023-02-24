import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter } from 'react-router-dom';
import './config/wdyr';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './root';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();