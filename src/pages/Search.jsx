import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function Search() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <h1>Búsquedas recientes</h1>
      <Footer />
    </div>
  );
}

export default Search;
