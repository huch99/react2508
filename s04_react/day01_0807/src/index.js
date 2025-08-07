import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import index_128p from './js/index_128p';
// import Hello from './js/index01';
// import Class from './js/index_Class';
// import Array from './js/index_array'; 
// import Desruct from './js/index_desruct';
// import Spread from './js/index_spread'
// import Web from './js/web';

import Blog from './js/blog';
import './js/blog.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Blog/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
