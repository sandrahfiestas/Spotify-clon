/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Footer from '../components/Footer';
import { useDataLayerValue } from '../DataLayer';
import SongRow from '../components/SongRow';
import { ReactComponent as PlayIcon } from '../images/icons/play.svg';
// import { ReactComponent as PlayCircleIcon } from '../images/icons/play-circle.svg';
import { ReactComponent as HeartIcon } from '../images/icons/heart.svg';

function AllSongs() {
  const [{ weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="container-allSongs">
        <div className="container-allSongs__title">
          <img
            src={weekly?.images[0].url}
            alt={weekly?.name}
            className="container-allSongs__title-img"
          />
          <div className="container-allSongs__title-info">
            <p className="container-allSongs__title-p">PLAYLIST</p>
            <h2 className="container-allSongs__title-h2">Discover Weekly</h2>
            <p className="container-allSongs__title-description">
              {weekly?.description}
            </p>
            <p className="container-allSongs__title-subDescription">
              <strong>Spotify</strong>
              <span className="container-allSongs__title-totalSongs">
                {' · '}
                {weekly?.tracks.total}
                {' canciones'}
              </span>
            </p>
          </div>
        </div>
        <div className="container-allSongs__songs">
          <div className="container-allSongs__songs-icons">
            <PlayIcon className="container-allSongs__songs-playIcon" />
            <HeartIcon className="container-allSongs__songs-heartIcon" />
            <span>...</span>
          </div>
          <div className="container-allSongs__songs-listSong">
            {weekly?.tracks.items.map((item) => (
              <SongRow
                className="container-allSongs__songs-listSong-songRow"
                track={item.track}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default AllSongs;
