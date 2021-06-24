import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    n1: "",
    n2: "",
    res: ""
  }

  handleChange = (e, type) => {
    this.setState({
      [type]: Number(e.target.value)
    })
  };

  divider = () => {
    this.setState({
      res: this.state.n1 / this.state.n2
    })
  }

  mult = () => {
    this.setState({
      res: this.state.n1 * this.state.n2
    })
  }

  mais = () => {
    this.setState({
      res: this.state.n1 + this.state.n2
    })
  }

  menos = () => {
    this.setState({
      res: this.state.n1 - this.state.n2
    })
  }

  limpar = () => {
    this.setState({
      n1: "",
      n2: "",
      res: ""
    })
  }

  render() {
    return (
        <div className="App">
          <h1></h1>
          <input onChange={(e) => this.handleChange(e, 'n1')} placeholder='Preencha com numero' />
          <input onChange={(e) => this.handleChange(e, 'n2')} placeholder='Preencha com numero' />
          <button onClick={this.divider}>/</button>
          <button onClick={this.mult}>*</button>
          <button onClick={this.menos}>-</button>
          <button onClick={this.mais}>+</button>
          <button onClick={this.limpar}>Limpar</button>
          <h2>{this.state.res}</h2>
        </div>
    );
  }
}

export default App;
