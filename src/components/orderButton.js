import React, { Component } from 'react';
import Navbar from './navbar';
import Order from './order';
import Browse from './browse';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Order/>
      </div>
    );
  }
}
