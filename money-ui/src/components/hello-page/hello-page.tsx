import React from 'react';
import logo from './logo.svg';
import './hello-page.css';

const HelloPage = () => {
  return (
    <div className="hello-page">
      <header className="hello-page-header">
        <img src={logo} className="hello-page-logo" alt="logo" />
        <p>
          Web Application for money tracking.
          {/* <br/>
          Server URL: {process.env.REACT_APP_SERVER_URL}
          <br/>
          Env: {process.env.NODE_ENV} */}
        </p>
      </header>
    </div>)
}

export default HelloPage;
