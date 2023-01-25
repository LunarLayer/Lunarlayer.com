import React, { useContext } from 'react';

// import { Context } from '../../GlobalState';

import './ChordScaleFinder.scss';
import FretboardPanel from "./panels/FretboardPanel/Fretboard-panel";

const ChordScaleFinder = () => {
  // const [strings,  setStrings]  = useContext(Context);
  // const [tonality, setTonality] = useContext(Context);

  return (
    <>
      <div className='chordScaleFinder'>
        Chordscalefinder here.

        {/* Strings: <h2>{strings.map((string) => 
          <p>{string.note}</p>
        )}</h2>
        Tonality: <h2>{tonality}</h2> */}
        <FretboardPanel></FretboardPanel>

      </div>
    </>
  );
};

export default ChordScaleFinder;
