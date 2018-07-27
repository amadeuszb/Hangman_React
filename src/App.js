import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/Keyboard'


class App extends Component {
  render() {
    return (
      <div>
        <div className="Keyboard">
          <Keyboard />
        </div>
        
      </div>  
      
    );
  }
}

export default App;
