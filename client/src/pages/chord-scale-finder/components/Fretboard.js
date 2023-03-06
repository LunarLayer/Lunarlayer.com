import React, { useContext } from 'react';

import './Fretboard.scss';
import { MusicContext } from '../context/MusicContext';

import String from './String';

const Fretboard = () => {
  const music = useContext(MusicContext);
  let notes = document.getElementsByClassName('note');
  
  window.addEventListener('resize', function() {
    let fretboard = document.getElementById('fretboard');
    let width = notes[0].offsetWidth;

    if (width === 45) {
      fretboard.style.fontSize = "25px";
    } else {
      let size = width / 2;
      fretboard.style.fontSize = size + "px";
    }
    
    // TODO: 
    // - Debounce
    // - Limit frets on smaller screen
    // - UseEffect removeEffect thingy
  });

  
  return (
    <>
      <div id='fretboard'>
        {music.strings.map(string => {
          return <String key={"string_" + string.number} stringNum={string.number} firstNote={string.note}></String>
        })}
      </div>
    </>
  );
};

export default Fretboard;


















// const String = ({stringNum, startNote}) => {
//   var notes = [];
//   var offset = music.notes.findIndex((x) => x.name === startNote);

//   for (let i = 0; i < parseInt(music.fretCount) + 1; i++) {
//     var pointer = (i + offset) % music.notes.length;
//     notes.push(music.notes[pointer]);
//   }
  
//   return ( 
//     <div id={"string_" + stringNum} className={`string`}>
//       {notes.map((note, index) => {
//         return <Note key={"note_" + index} note={note.name}></Note>
//       })}
//     </div>
//   )
// }

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