import React from 'react';

import './Fretboard.scss';

const Fretboard = () => {


  return (
    <>
      <div className='fretboard'>
        asd
      </div>
    </>
  );
};

export default Fretboard;



















// import React, { useContext } from 'react';

// import './Fretboard.scss';

// import { MusicContext } from '../../../context/MusicContext';
// // import FretsSlider from '../fretsSlider/FretsSlider';

// const Fretboard = ({settings}) => {
//   const music = useContext(MusicContext);

//   const String = ({stringNum, startNote}) => {
//     var notes = [];
//     var offset = music.notes.findIndex((x) => x.name === startNote);

//     for (let i = 0; i < music.fretCount; i++) {
//       var pointer = (i + offset) % music.notes.length;
//       notes.push(music.notes[pointer]);
//     }
    
//     return ( 
//       <div id={"string_" + stringNum} className={`string`}>
//         {notes.map((note, index) => {
//           if (note.name.includes('#')) {
//             return (
//               <button 
//               id={index.toString() + '_' + stringNum.toString()} 
//               key={index} 
//               className={`${note.name} note sharp ${index === 0 ? "selected" : ''}`}>
//                 {note.name[0]}
//               </button>
//             )
//           } else {
//             return (
//               <button 
//               id={index.toString() + '_' + stringNum.toString()} 
//               key={index} 
//               className={`${note.name} note ${index === 0 ? "selected" : ''}`}>
//                 {note.name}
//               </button>
//             )
//           }
//         })}
//       </div>
//     )
//   }

//   const RenderStrings = () => {
//     return (
//       <div className='strings'>
//         {music.strings.map((string) => {
//           return (
//             <String 
//               key={'string_' + string.number} 
//               stringNum={string.number} 
//               startNote={string.note}
//             />
//           )
//         })}
//       </div>
//     )
//   }

//   return (
//     <div className='fretboard'>
//       <RenderStrings/>
//     </div>
//   )
// };

// export default Fretboard;





// // Set a new tuning: 
// // let tempStrings = music.strings;
// // let idx = stringIndex - 1;
// // let newString = tempStrings[idx];
// // newString.note = noteName;
// // tempStrings[idx] = newString;
// // music.setStrings(tempStrings);