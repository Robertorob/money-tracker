import React from 'react';
import logo from '../logo.svg';
import './hello-page.css';

const HelloPage = () => {
  return (
    <div className="hello-page">
      <header className="hello-page-header">
        <img src={logo} className="hello-page-logo" alt="logo" />
        <p>
          Web Application for money tracking.
        </p>
      </header>
    </div>)
}

export default HelloPage;
