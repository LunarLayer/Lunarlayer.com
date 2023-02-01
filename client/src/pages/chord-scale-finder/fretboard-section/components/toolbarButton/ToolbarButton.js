import React, { useState, useContext } from 'react';

import './ToolbarButton.scss';

import { MusicContext } from '../../../context/MusicContext';


const ToolbarButton = ({ variant, setDisplayView }) => {
  const music = useContext(MusicContext);

  const AddString = () => {
    music.setStrings({...music.strings, })
  }

  const DeleteString = () => {
    
  }

  switch (variant) {
    case "Key":
      return (
        <div className='key'>
          <h3 className='title'>Key</h3>
          <div className='content'>
            <button onClick={() => music.setFretboardDisplay("key")}>
              {music.tonality.note} {music.tonality.scale}
            </button>
          </div>
        </div>
      )
    case "Strings":
      return (
        <div className='strings'>
          <h3 className='title'>Strings</h3>
          <div className='content'>
            <div className='counter'>
              {music.strings.length}
            </div>
            <div className="incrementer">
              <button onClick={() => {AddString("top")}}>+</button>
              <button onClick={() => {AddString("top")}}>-</button>
            </div>
          </div>
        </div>
      )

    case "Tuning":
      return (
        <div className='tuning'>
          <h3 className='title'>Tuning</h3>
          <div className='content'>
            <button onClick={null}>
              {music.strings.map((string) => { // Only works wit arrays
                return string.note
              })}
            </button>
          </div>
        </div>
      )
    case "Notes":
      return (
        <div className='notes'>
          <h3 className='title'>Notes</h3>
          <div className='content'>
            <button onClick={null}>
              Clear
            </button>
          </div>
        </div>
      )
    default:
      break;
  }
};

export default ToolbarButton;
