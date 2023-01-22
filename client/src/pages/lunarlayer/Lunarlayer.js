import React from 'react';

import './Lunarlayer.scss';

import ChordScaleFinder from "../chord-scale-finder/ChordScaleFinder";

const Lunarlayer = () => {
  return (
    <>
      <div className='lunarlayer'>
        <h3>Welcome to LunarLayer.</h3>
        <p>(The site is still under construction)</p>
        <p>Hi! I'm Tom Steinmeier, an aspiring Front-end / Web dev. I dream of travelling the world on my motorbike as a freelancer</p>
        
       <a href='/chord-scale-finder'>CSF</a>

      </div>
    </>
  );
};

export default Lunarlayer;
