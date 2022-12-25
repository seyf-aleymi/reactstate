import React, { useState } from 'react';
  
  
class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.myFunction = this.myFunction.bind(this);
  }
  
  myFunction(e) {
    alert("The value of counter is " + this.state.counter)
    this.setState({ counter: this.state.counter + 1 })
  }
  
  render() {
    return (
      <div >
        <p>Hello From GFG</p>
  
        <button onClick={this.myFunction}>
         Click me!
        </button>
      </div>
    );
  }
}
  
export default App;