import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { ReactComponent as SearchIcon } from '../images/icons/search.svg';

function Search() {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
      <div className="search">
        <div className="search__divImg">
          <SearchIcon className="search__divImg-icon" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
