import React, { useRef, useState, useEffect, useContext } from 'react';

import "./KeyScaleSelector.scss";

import { MusicContext } from '../../../context/MusicContext';


const KeySelector = () => {
  const music = useContext(MusicContext);
  const snap = music.tonality;

  useEffect(() => {
    if (snap.note === music.tonality.note) {
      console.log("its equal");
      console.log(snap.note);
      console.log(music.tonality.note);
    } else {
      console.log("its not ueqla");
    }

  }, [music.tonality]);




  const keySelectPiano = () => {
    return (
      <div className='piano'>
        {music.notes.map((note) => {
          if (note.color === "white") {
            return (
              <button
                key={note.name}
                className={`whiteKey ${music.tonality.note === note.name ? "selected" : ''}`}
                onClick={() => music.setTonality({...music.tonality, note: note.name})}>
              {note.name}
              </button>
            )
          } else {
            return (
              <button
                key={note.name}
                className={`blackKey ${music.tonality.note === note.name ? "selected" : ''}`}
                onClick={() => music.setTonality({...music.tonality, note: note.name})}>
                {note.name} {note.alternateName}
              </button>
            )
          }
        })}
      </div>
    )
  }

  return (
    <>
      <div className='keyScaleSelector'>

        <div className='keySelector'>
          <h3>Select a key</h3>
          {keySelectPiano()}
        </div>

        <div className='scaleSelector'>
          <h3>Select a scale</h3>
          <div className='content'>
            <div className='majorMinorSelect'>
              <button 
              className={music.tonality.scale === music.majorChords.major.type ? "selected" : ''}
              onClick={() => music.setTonality({...music.tonality, scale: music.majorChords.major.type})}>
                {music.majorChords.major.type}
              </button>
              <button 
              className={music.tonality.scale === music.minorChords.minor.type ? "selected" : ''}
              onClick={() => music.setTonality({...music.tonality, scale: music.minorChords.minor.type})}>
                {music.minorChords.minor.type}
              </button>
            </div>
            <div className='sharpsFlatsDisplay'>
              Scale info
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default KeySelector;
