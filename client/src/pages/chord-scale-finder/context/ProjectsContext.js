// import React, { useState, useEffect } from "react";
// import axios from 'axios';

// export const ProjectsContext = React.createContext();

// export default function ProjectsContextProvider({ children }) {
//   const [strings,  setStrings]  = useState([]); // id/int number/int note/varchar
//   const [tonality, setTonality] = useState([]); // id/int note/varchar scale/varchar

//   useEffect(() => {
//     const fetchStrings = async () => {
//       try {
//         const res = await axios.get("https://lunarlayer-server.onrender.com/strings");
//         setStrings(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     const fetchTonality = async () => {
//       try {
//         const res = await axios.get("https://lunarlayer-server.onrender.com/tonality");
//         setTonality(res.data[0]);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchStrings();
//     fetchTonality();
//   }, []);


//   return (
//     <ProjectsContext.Provider
//       value={{
//         strings, setStrings,
//         tonality, setTonality,
//       }}
//     >
//       {children}
//     </ProjectsContext.Provider>
//   );
// };
