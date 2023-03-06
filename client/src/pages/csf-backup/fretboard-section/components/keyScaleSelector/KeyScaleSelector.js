import React, { useRef, useState, useEffect, useContext } from 'react';

import "./KeyScaleSelector.scss";

import { MusicContext } from '../../../../chord-scale-finder/context/MusicContext';

const KeySelector = () => {
  const music = useContext(MusicContext);

  return (
    <>
      <div className='keyScaleSelector'>
        Keyscaleselector
      </div>
    </>
  );
};

export default KeySelector;
