import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
