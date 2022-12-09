import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './components/Quiz.js';
import HomePage from './pages/HomePage.js';
import './main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router basename={window.location.pathname || ''}>
            <Routes>
                <Route path='/quiz' element={<Quiz />} />
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    </React.StrictMode>
);