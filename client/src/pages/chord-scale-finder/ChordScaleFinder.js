import React from 'react';

import './ChordScaleFinder.scss';
import MusicContext from './context/MusicContext';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Display from './components/Display';

const ChordScaleFinder = () => {
  return (
    <MusicContext>
      <Navbar />
      <Toolbar />
      <Display />
    </MusicContext>
  );
};

export default ChordScaleFinder;
