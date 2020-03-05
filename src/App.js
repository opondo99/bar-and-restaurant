import React from 'react';
import Header from './components/header/Header';
import Restaurant from './components/restaurant/Restaurant';
import Bar from './components/bar/Bar';
import Footer from './components/footer/Footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Restaurant />
      <Bar />
      <Footer />                                                                                                                                            
    </div>
  );
}

export default App;
