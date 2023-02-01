import React, { useState, useContext } from 'react';

import './FretboardPanel.scss';

import ToolbarButton from '../../components/toolbarButton/ToolbarButton';
import Fretboard from '../../components/fretboard/Fretboard';
import KeyScaleSelector from '../../components/keyScaleSelector/KeyScaleSelector';

import { MusicContext } from '../../../context/MusicContext';




const FretboardPanel = () => {
  const [displayView, setDisplayView] = useState("fretboard");
  const music = useContext(MusicContext);

  function Display({ view }) {
    if (view === "fretboard") return <Fretboard/>
    if (view === "key") return <KeyScaleSelector/>
  }

  return (
    <>
      <div className='fretboard-panel'>
        <div className='toolbar'>
          <ToolbarButton variant="Key" />
          <ToolbarButton variant="Strings" />
          <ToolbarButton variant="Tuning" />
          <ToolbarButton variant="Notes" />
        </div>
        <div className='display'>
          <Display view={music.fretboardDisplay}></Display>
          {/* <Fretboard></Fretboard> */}
          {/* <KeyScaleSelector /> */}
        </div>
      </div>
    </>
  );
};



export default FretboardPanel;
