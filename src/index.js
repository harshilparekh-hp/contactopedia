import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Layout/Header'
import MainBody from './components/ContactPages/MainBody';
import Footer from './components/Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    
    <MainBody></MainBody>
    
  </div>
);
