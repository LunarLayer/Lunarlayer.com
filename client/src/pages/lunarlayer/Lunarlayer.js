import React from 'react';
import {Link} from 'react-router-dom'

import './Lunarlayer.scss';

import ChordScaleFinder from "../chord-scale-finder/ChordScaleFinder";

const Lunarlayer = () => {
  return (
    <>
      <div className='lunarlayer'>
        <h3>Welcome to LunarLayer.</h3>
        <p>(The site is still under construction)</p>
        <p>Hi! I'm Tom Steinmeier, an aspiring Front-end / Web dev. I dream of travelling the world on my motorbike as a freelancer</p>
        
        <Link to="/chord">/chord</Link>

      </div>
    </>
  );
};

export default Lunarlayer;
