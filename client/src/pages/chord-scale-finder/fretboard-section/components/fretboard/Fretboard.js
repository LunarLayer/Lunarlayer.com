import React, { useState, useContext, useEffect } from 'react';

import './Fretboard.scss';

import { MusicContext } from '../../../context/MusicContext';

const Fretboard = () => {
  const music = useContext(MusicContext);
  
  const Notes = (strings) => {
    return (
      <div className='notes'>
        {music.strings.map((string) => {
          return <button key={string.number} className={string.number}>{string.note}</button>
        })}
      </div>
    )
  }
  return (
    <>
      <div className='fretboard'>
        <div className='background'></div>
        <div className='topUtil'></div>
        <Notes />
        <div className='bottomUtil'>
          <button onClick={() => music.addString({position: "top", notex: "T"})}>+ Add string Top</button>
          <button onClick={() => music.addString({position: "bottom", notex: "B"})}>+ Add string Bottom</button>
          <button onClick={() => music.removeString(1)}>IndexOf E might be 5</button>
        </div>
      </div>
    </>
  );
};

export default Fretboard;
{/* {music.strings.map((string) => { // Only works wit arrays
          return (
            <div key={string.number} className='string'>
              {string.number} - {string.note}
            </div>
          )
        })} */}