import React from 'react';
import imgHistory1 from '../images/history1.jpg';
import imgHistory2 from '../images/history2.jpg';
import imgHistory3 from '../images/history3.jpg';
import imgHistory4 from '../images/history4.jpg';
import imgHistory5 from '../images/history5.jpg';
import imgHistory6 from '../images/history6.jpg';

function CardsHistory() {
  return (
    <section className="container-cardsHistory">
      <div className="container-cardsHistory__card">
        <img src={imgHistory1} className="container-cardsHistory__card-img" alt="imagen1" />
        <p className="container-cardsHistory__card-p">Animes</p>
      </div>
      <div className="container-cardsHistory__card">
        <img src={imgHistory2} className="container-cardsHistory__card-img" alt="imagen2" />
        <p className="container-cardsHistory__card-p">Deep House Top 100</p>
      </div>
      <div className="container-cardsHistory__card">
        <img src={imgHistory3} className="container-cardsHistory__card-img" alt="imagen3" />
        <p className="container-cardsHistory__card-p">La Reina</p>
      </div>
      <div className="container-cardsHistory__card">
        <img src={imgHistory4} className="container-cardsHistory__card-img" alt="imagen4" />
        <p className="container-cardsHistory__card-p">Deep House</p>
      </div>
      <div className="container-cardsHistory__card">
        <img src={imgHistory5} className="container-cardsHistory__card-img" alt="imagen5" />
        <p className="container-cardsHistory__card-p">Deep house</p>
      </div>
      <div className="container-cardsHistory__card">
        <img src={imgHistory6} className="container-cardsHistory__card-img" alt="imagen6" />
        <p className="container-cardsHistory__card-p">Los de antes...</p>
      </div>
    </section>
  );
}

export default CardsHistory;
