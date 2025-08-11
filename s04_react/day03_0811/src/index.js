import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ColorChange from './js/colorChange';
import ToggleButton from './js/toggleButton';
import ToDoList from './js/toDoList';
import Comment from './js/comment';
import Effect from './js/effect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColorChange />
    <hr />
    <ToggleButton />
    <hr />
    <ToDoList />
    <hr />
    <Comment />
    <hr />
    <Effect />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
