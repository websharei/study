import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component { // 이코드는 App이라는 클래스를 선언합니다. 새로운 컴포넌트를 만들 때는 이렇게 클래스를 선언합니다.
  render() {// 이 함수 내부에서는 컴포넌트를 유저에게 어떻게 보일지 return합니다.
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
