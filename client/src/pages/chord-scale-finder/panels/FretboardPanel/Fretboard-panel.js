import React, { useContext } from 'react';

import { Context } from '../../../../GlobalState';

import SquareButton from '../../components/squareButton/SquareButton';

import './Fretboard-panel.scss';



const FretboardPanel = () => {
  const [strings,  setStrings]  = useContext(Context);
  const [tonality, setTonality] = useContext(Context);


  const StringsIncrementer = () => {
    return (
      <div>
        <button onClick={null}>+</button>
        {/* <p>{strings.something}</p> */}
        <button onClick={null}>+</button>
      </div>
    )
  }

  return (
    <>
      <div className='fretboard-panel'>
        <div className='toolbar'>
          <SquareButton 
            title="TITLE" 
            content={<StringsIncrementer/>}>
          

          </SquareButton>
        </div>
        <div className='interact'>

        </div>
      </div>
    </>
  );
};

export default FretboardPanel;
