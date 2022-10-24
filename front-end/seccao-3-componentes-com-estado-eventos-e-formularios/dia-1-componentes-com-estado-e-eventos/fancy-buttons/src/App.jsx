import React, { Component } from 'react';
import './App.css';

const firstButton = () => { console.log('primeiro') };

const secondButton = () => { console.log('segundo') };

const thirdButton = () => { console.log('terceiro') };

class App extends Component {
  render() {
    return (
    <div className="App">
      <button onClick={firstButton}>Primeiro Botão</button>
      <br />
      <br />
      <button onClick={secondButton}>Segundo Botão</button>
      <br />
      <br />
      <button onClick={thirdButton}>Terceiro Botão</button>
    </div>
    );
  }
}

export default App;
