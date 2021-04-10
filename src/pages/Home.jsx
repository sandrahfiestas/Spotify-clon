import React from 'react';
import Header from '../components/Header';
import CardsHistory from '../components/CardsHistory';
import CardsPlaylist from '../components/CardsPlaylist';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="container-home">
      <Header />
      <CardsHistory />
      <CardsPlaylist />
      <CardsPlaylist />
      <Footer />
    </div>
  );
}

export default Home;
