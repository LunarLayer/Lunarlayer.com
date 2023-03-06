import React from 'react';
import {Link} from 'react-router-dom'

import './Lunarlayer.scss';

import ChordScaleFinder from "../chord-scale-finder/ChordScaleFinder";

const Lunarlayer = () => {
  return (
    <>
      <div className='lunarlayer'>
        <img src='./assets/lunarlayer192.png'></img>
        <h1>Welcome to LunarLayer!</h1>
        <p>I'm Tom. Frontender, musician and traveler</p>
        <p>Currently banging my head against the <Link to="/chord-scale-finder">Chord scale finder</Link></p> 
          You can take a look at <a href='https://cv.lunarlayer.com'>my resume</a> - or go for a workout, your choice.
      </div>
    </>
  );
};

export default Lunarlayer;
