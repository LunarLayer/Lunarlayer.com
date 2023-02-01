import React from 'react';

import './ChordScaleFinder.scss';

import MusicContext from './context/MusicContext';

import FretboardPanel from "./fretboard-section/panels/fretboardPanel/FretboardPanel";
import ChordProgressionPanel from './chordProgression-section/panels/ChordProgression/ChordProgressionPanel';

const ChordScaleFinder = () => {
  return (
    <>
      <MusicContext>
        <div className='chordScaleFinder'>
          <FretboardPanel/>
          <ChordProgressionPanel/>
        </div>
      </MusicContext>
    </>
  );
};

export default ChordScaleFinder;
