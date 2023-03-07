import React, { useContext, useState, useEffect } from 'react';

import './Toolbar.scss';
import { MusicContext } from '../context/MusicContext';
import { BrowserContext } from '../context/BrowserContext';

// TODO: Failsafe for no frets (in fretboard.js)

const Toolbar = () => {
  const music = useContext(MusicContext);
  const browser = useContext(BrowserContext);
  const slider = React.createRef();

  let noteGapSize = browser.x < 600 ? 2 : 5;
  const noteMinWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--note_min_width'));
  const noteMaxWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--note_max_width'));
  let sliderMax = getSliderMax();
  let sliderValue = music.fretCount;
  

  function getSliderMax() {
    let padding = "";
    let max = "";
    browser.x <= 600 ? padding = 10 : padding = 20;
    max = Math.floor((browser.x - padding - (music.fretCount * noteGapSize - noteGapSize)) / noteMinWidth);
    if (max > 24) max = 24;
    return max;
  }

  useEffect(() => {
    if (browser.x <= 600) {
      music.setFretCount(12);
    } else {
      music.setFretCount((Math.floor((browser.x - 20 - (music.fretCount * noteGapSize - noteGapSize)) / noteMaxWidth)) + 1);
    }
  }, [browser.x]);


  if (sliderValue > sliderMax) sliderValue = sliderMax;




  function sliderMoved() {
    console.log("val: " + sliderValue);
    console.log("max: " + sliderMax);
    sliderValue = slider.current.value;
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
        {/* <h3>Frets: {sliderValue === "-1" ? 'none' : sliderValue}</h3> */}
        <h3>Frets: {sliderValue}</h3>
        <div className='slider'>
          <input
            ref={slider}
            type="range"
            value={sliderValue > sliderMax ? sliderMax : sliderValue}
            min="-1"
            max={sliderMax}
            onChange={sliderMoved}
            disabled={`${music.displayView !== "fretboard" ? ' disabled' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
