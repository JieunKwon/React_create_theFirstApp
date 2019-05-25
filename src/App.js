import React from 'react';
import './App.css';
import logo from './img/profilePhoto_2s.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo-photo" alt="Julia" />
        <p>
          Welcome to Julia's First App
        </p>
        <a
          className="App-link"
          href="https://github.com/JieunKwon/React_create_theFirstApp"
          target="_blank"
          rel="Julia_theFirstApp"
        >
          Go to Julia's Github
        </a>
      </header>
    </div>
  );
}

export default App;
