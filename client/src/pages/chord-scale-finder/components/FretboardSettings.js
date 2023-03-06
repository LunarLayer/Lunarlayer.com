import React, {useContext} from 'react';

import './FretboardSettings.scss';
import { MusicContext } from '../context/MusicContext';

import String from './String';

const FretboardSettings = () => {
  const music = useContext(MusicContext);

  return (
    <>
      <div className='fretboardSettings'>
        <String context="add" stringNum={0} firstNote="C"/>
        {music.strings.map(string => {
          return <String context="remove" key={"string_" + string.number} stringNum={string.number} firstNote={string.note}/>
        })}
        <String context="add" stringNum={4} firstNote="B"/>
      </div>
    </>
  );
};

export default FretboardSettings;
