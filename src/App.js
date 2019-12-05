import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Socials from './Components/Socials/Socials';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';

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
