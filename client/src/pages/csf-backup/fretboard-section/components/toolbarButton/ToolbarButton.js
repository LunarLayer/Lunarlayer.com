import React, { useContext } from 'react';

import './ToolbarButton.scss';

import { MusicContext } from '../../../../chord-scale-finder/context/MusicContext';


const ToolbarButton = ({ variant, setDisplayView }) => {
  const music = useContext(MusicContext);

  switch (variant) {
    case "Key":
      return (
        <div className='keySettings'>
          <h3 className='title'>Key</h3>
          <div className='content'>
            <button onClick={() => { music.fretboardDisplayView === "key" 
            ? music.setFretboardDisplayView("fretboard") 
            : music.setFretboardDisplayView("keyChange") }}>
              {music.tonality.note} {music.tonality.scale}
            </button>
          </div>
        </div>
      )
    case "Fretboard":
      return (
        <div className='fretboardSettings'>
          <h3 className='title'>Fretboard</h3>
          <div className='content'>
          <button onClick={() => { music.fretboardDisplayView === "fretboardSettings" 
            ? music.setFretboardDisplayView("fretboard") 
            : music.setFretboardDisplayView("fretboardSettings") }}>
              Settings
            </button>
          </div>
        </div>
      )
    case "Notes":
      return (
        <div className='notesSettings'>
          <h3 className='title'>Notes</h3>
          <div className='content'>
            <button onClick={null}>
              Clear
            </button>
          </div>
        </div>
      )
    case "Frets":
      return (
        <div className='fretsSettings'>
          <h3 className='title'>12 Frets</h3>
          <div className='content'>
            <button onClick={null}>
              SliderHereHere
            </button>
          </div>
        </div>
      )
    default:
      break;
  }
};

export default ToolbarButton;
