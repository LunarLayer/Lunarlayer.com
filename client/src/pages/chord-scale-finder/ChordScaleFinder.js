import React from 'react';

import './ChordScaleFinder.scss';
import FretboardPanel from "./panels/FretboardPanel/Fretboard-panel";

const ChordScaleFinder = () => {
  return (
    <>
      <div className='chordScaleFinder'>
        Chordscalefinder here
        <FretboardPanel></FretboardPanel>

      </div>
    </>
  );
};

export default ChordScaleFinder;
