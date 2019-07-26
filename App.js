import React, { Component } from 'react'
import Navbar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import Footer from './component/layout/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Landing/>
      <Footer/>
      </div>
    )
  }
}
