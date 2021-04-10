import React from 'react';
import imgPlaylist1 from '../images/playList1.jpg';
import imgPlaylist2 from '../images/playList2.jpg';
import imgPlaylist3 from '../images/playList3.jpg';
import imgPlaylist4 from '../images/playList4.jpg';
import imgPlaylist5 from '../images/playList5.jpg';
import imgPlaylist6 from '../images/playList6.jpg';

function CardsPlaylist() {
  return (
    <div className="container-cardsPlaylist">
      <div className="container-cardsPlaylist__title">
        <h2>Escuchado recientemente</h2>
      </div>
      <div className="container-cardsPlaylist__cards">
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist1} className="container-cardsPlaylist__card-img" alt="imagen1" />
          <p className="container-cardsPlaylist__card-p">Deep House Top 100</p>
        </div>
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist2} className="container-cardsPlaylist__card-img" alt="imagen2" />
          <p className="container-cardsPlaylist__card-p">Rock Español 80s</p>
        </div>
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist3} className="container-cardsPlaylist__card-img" alt="imagen3" />
          <p className="container-cardsPlaylist__card-p">Deep House</p>
        </div>
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist4} className="container-cardsPlaylist__card-img" alt="imagen4" />
          <p className="container-cardsPlaylist__card-p">Animes</p>
        </div>
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist5} className="container-cardsPlaylist__card-img" alt="imagen5" />
          <p className="container-cardsPlaylist__card-p">Deep house, Vol. 2</p>
        </div>
        <div className="container-cardsPlaylist__card">
          <img src={imgPlaylist6} className="container-cardsPlaylist__card-img" alt="imagen6" />
          <p className="container-cardsPlaylist__card-p">Fiestas! Fiestas!</p>
        </div>
      </div>
    </div>
  );
}

export default CardsPlaylist;
