import React from 'react';
import ReactDOM from 'react-dom/client';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { applyMiddleware } from "redux";
import  ThunkMiddleware  from 'redux-thunk';
import './index.css';
import App from './App';
import { SearchRobots, RequestRobots } from './reducer';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();

const store = configureStore({reducer: { SearchRobots, RequestRobots }  }, applyMiddleware(ThunkMiddleware, logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
