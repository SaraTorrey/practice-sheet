import React, { Component } from 'react';
import Header from './components/layout/Header';


import './App.css';

class App extends Component {
  state = {
    pages: []
  }

render () {
    return (
          <div className="App">
            <div className="container">
              <Header />
            </div>
          </div>
    );
}

}

export default App;
