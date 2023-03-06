import React, { useContext } from 'react';

import './Fretboard.scss';

import { MusicContext } from '../../../../chord-scale-finder/context/MusicContext';
// import FretsSlider from '../fretsSlider/FretsSlider';

const Fretboard = ({settings}) => {
  const music = useContext(MusicContext);

  const String = ({stringNum, startNote}) => {
    var notes = [];
    var offset = music.notes.findIndex((note) => note.name === startNote);

    for (let i = 0; i < 12; i++) {
      var pointer = (i + offset) % music.notes.length;
      notes.push(music.notes[pointer]);
    }
    
    return ( 
      <div id={"string_" + stringNum} className={`string`}>
        {notes.map((note, index) => {
          if (note.name.includes('#')) {
            return (
              <button 
              id={index.toString() + '_' + stringNum.toString()} 
              key={index} 
              className={`${note.name} note sharp ${index === 0 ? "selected" : ''}`}>
                {note.name[0]}
              </button>
            )
          } else {
            return (
              <button 
              id={index.toString() + '_' + stringNum.toString()} 
              key={index} 
              className={`${note.name} note ${index === 0 ? "selected" : ''}`}>
                {note.name}
              </button>
            )
          }
        })}
        
        <div className='hiddenTuningNotes'>
          {notes.map((note, index) => {
            if (note.name.includes('#')) {
              return <button key={index} className='note sharp'>{note.name[0]}</button>
            } else {
              return <button key={index} className='note'>{note.name}</button>
            }
          })}
        </div>
      </div>
    )
  }

  const RenderStrings = () => {
    return (
      <div className='strings'>
        {music.strings.map((string) => {
          return (
            <String 
              key={'string_' + string.number} 
              stringNum={string.number} 
              startNote={string.note}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className='fretboard settings'>
      <RenderStrings/>
    </div>
  )
};

export default Fretboard;





// Set a new tuning: 
// let tempStrings = music.strings;
// let idx = stringIndex - 1;
// let newString = tempStrings[idx];
// newString.note = noteName;
// tempStrings[idx] = newString;
// music.setStrings(tempStrings);