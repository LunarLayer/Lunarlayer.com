import React, { useContext } from 'react';

import './String.scss';
import { MusicContext } from '../context/MusicContext';

import Note from './Note';

const String = ({stringNum, firstNote, context}) => {
  const music = useContext(MusicContext);

  // Generate notes for the string
  var notes = [];
  var pointer = "";
  var offset = music.notes.findIndex((note) => note.name === firstNote);

  if (context) {
    for (let i = 0; i < 12; i++) { 
      pointer = (i + offset) % music.notes.length;
      notes.push(music.notes[pointer]);
    }
  } else {
    for (let i = 0; i < parseInt(music.fretCount) + 1; i++) { 
      pointer = (i + offset) % music.notes.length;
      notes.push(music.notes[pointer]);
    }
  }
  

  switch (context) {
    case "add":
      return (
        <div id={"string_" + stringNum} className={`add string`}>
          <Note note="+"/>
          {notes.map((note, index) => {
            return <Note key={"note_" + index} note={note.name}></Note>
          })}
        </div>
      )

    case "remove":
      return (
        <div id={"string_" + stringNum} className={`remove string`}>
          <Note note="-"/>
          {notes.map((note, index) => {
            return <Note key={"note_" + index} note={note.name}></Note>
          })}
        </div>
      )
    
    default:
      return ( 
        <div id={"string_" + stringNum} className={`string`}>
          {notes.map((note, index) => {
            return <Note key={"note_" + index} note={note.name}></Note>
          })}
        </div>
      )
  }
};

export default String;
