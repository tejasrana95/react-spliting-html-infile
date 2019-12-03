import React, { Component } from 'react';
import { render } from 'react-dom';;
import './style.css';
import HelloWorldText from './index-html';
import TableData from './table-html';

class App extends Component {
  elements = ['one', 'two', 'three'];
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
    this.elements.push('one', 'two', 'three');

  }

  render() {
    return (
      <div>
        <HelloWorldText names={this.state.name}/>
        <TableData datas={this.elements}/>
      </div>
     );
  }
}

render(<App />, document.getElementById('root'));
