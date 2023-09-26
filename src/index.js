import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header'
import MainBody from './components/MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Header></Header>
    <MainBody></MainBody>
  </div>
);
