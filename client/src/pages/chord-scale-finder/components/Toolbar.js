import React, { useContext } from 'react';

import './Toolbar.scss';
import { MusicContext } from '../context/MusicContext';

const Toolbar = () => {
  const music = useContext(MusicContext);
  const slider = React.createRef();

  function sliderMoved() {
    music.setFretCount(slider.current.value);
  }

  return (
    <div className='toolbar'>

      <div className='key-change'>
        <h3>Key</h3>
        <button
          className={music.displayView === "keyChange" ? 'selected' : ''}
          onClick={() => {
            if (music.displayView === "keyChange") {
              music.setDisplayView('fretboard')
            } else {
              music.setDisplayView('keyChange')
            }
          }
          }>{music.tonality.note + " " + music.tonality.scale}
        </button>
      </div>

      <div className='fretboard-settings'>
        <h3>Fretboard</h3>
        <button
          className={music.displayView === "fretboardSettings" ? 'selected' : ''}
          onClick={() => {
            if (music.displayView === "fretboardSettings") {
              music.setDisplayView('fretboard')
            } else {
              music.setDisplayView('fretboardSettings')
            }
          }
          }>Settings
        </button>
      </div>

      <div className={`notes-clear${music.displayView !== "fretboard" ? ' disabled' : ''}`}>
        <h3>Notes</h3>
        <button>Clear</button>
      </div>

      <div className={`frets-slider${music.displayView !== "fretboard" ? ' disabled' : ''}`}>
        <h3>Frets: {music.fretCount === "-1" ? 'none' : music.fretCount}</h3>
        <div className='slider'>
          <input
            ref={slider}
            type="range"
            value={music.fretCount}
            min="-1"
            max="24"
            onChange={sliderMoved}
            disabled={`${music.displayView !== "fretboard" ? ' disabled' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
