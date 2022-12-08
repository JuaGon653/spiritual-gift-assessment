import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz.js';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Quiz />
    </React.StrictMode>
);