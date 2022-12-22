import React from 'react';
import { AboutUs, Chef, Footer, Header, SpecialMenu } from './container';
import './App.css';
import { Navbar } from './components';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu /> 
    {/* <Laurels /> */}
    <Chef />
    <Footer /> 
  </div>
);

export default App;