import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {};
  componentDidMount(){
    this.dadJokes()
  }

  dadJokes = () => {
    fetch("api/dadjokes")
      .then(response => response.text())
      .then(message => {this.setState({message : message})});
  };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={"https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*MmSekcpfVq3Ckath3wlJ_Q.jpeg?ssl=1"} className="App-logo" alt="logo" />
          <h3 className="App-Title" >{this.state.message}</h3>
          </header>
          <p className="App-Intro">
            "hjhjjhj"            
          </p>
      </div>
    );
  }
}

export default App;
