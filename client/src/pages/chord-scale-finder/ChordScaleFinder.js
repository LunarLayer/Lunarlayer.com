import React from 'react';

import './ChordScaleFinder.scss';
import MusicContext from './context/MusicContext';
import BrowserContext from './context/BrowserContext';

import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';
import Display from './components/Display';

function ChordScaleFinder() {
  return (
    <BrowserContext>
      <MusicContext>
        <Navbar />
        <Toolbar />
        <Display />
      </MusicContext>
    </BrowserContext>
  );
};

export default ChordScaleFinder;
