import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
