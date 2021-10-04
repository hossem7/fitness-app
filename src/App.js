import React from 'react';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Process from './Components/Process/Process';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Process />
      <Shop />
      
      <Footer />
    </>
  );
}

export default App;
