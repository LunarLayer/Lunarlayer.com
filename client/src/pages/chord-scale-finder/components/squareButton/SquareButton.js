import React from 'react';

import './SquareButton.scss';

const SquareButton = ({title, content}) => {
  return (
    <>
      <div className='squareButton'>
        <h3 className='title'>{title}</h3>
        <div className='content'>
          {content}
        </div>
      </div>
    </>
  );
};

export default SquareButton;
