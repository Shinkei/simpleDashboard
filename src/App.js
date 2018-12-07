import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import StyledInvoice from './components/styledComponents/StyledInvoice';
import Revision from './components/Revision';
import Diagram from './components/Diagram';
import Overview from './components/Overview';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <StyledInvoice>
          <div>
            <h1>Invoice</h1>
            <h3>S03834754</h3>
          </div>
          <Revision />
          <Diagram />
          <Overview />
        </StyledInvoice>
      </>
    );
  }
}

export default App;
