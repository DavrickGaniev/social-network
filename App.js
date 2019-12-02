import React from 'react';
import './App.css';
import Header from './Components/Header';
import Socials from './Components/Socials';
import Posts from './Components/Posts';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
        <Header />
        <Socials />
        <Posts />
        <Footer />
    </div>
  );
}
export default App;
