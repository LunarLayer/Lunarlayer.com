import React, { useContext } from 'react';

import './FretboardPanel.scss';

import ToolbarButton from '../../components/toolbarButton/ToolbarButton';
import Fretboard from '../../components/fretboard/Fretboard';
import FretboardSettings from '../../components/fretboard/FretboardSettings';
import KeyScaleSelector from '../../components/keyScaleSelector/KeyScaleSelector';

import { MusicContext } from '../../../../chord-scale-finder/context/MusicContext';




const FretboardPanel = () => {
  const music = useContext(MusicContext);

  function Display({ view }) {
    if (view === "fretboard")         return <Fretboard/>
    if (view === "fretboardSettings") return <FretboardSettings/>
    if (view === "keyChange")         return <KeyScaleSelector/>    
  }

  return (
    <>
      <div className='fretboard-panel'>
        <div className='toolbar'>
          <ToolbarButton variant="Key" />
          <ToolbarButton variant="Fretboard" />
          <ToolbarButton variant="Notes" />
          <ToolbarButton variant="Frets" />
        </div>
        <Display view={music.fretboardDisplayView}></Display>
      </div>
    </>
  );
};



export default FretboardPanel;
