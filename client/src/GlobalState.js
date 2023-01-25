import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GlobalState = ({ children }) => {
  const [strings,  setStrings]  = useState([]);
  // id     = int
  // number = int
  // note   = varchar

  const [tonality, setTonality] = useState([]);
  // id    = int
  // note  = varchar
  // scale = varchar

  useEffect(() => {
    const fetchStrings = async () => {
      try {
        const res = await axios.get("https://lunarlayer-server.onrender.com/strings");
        setStrings(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStrings();
  }, []);

  useEffect(() => {
    const fetchTonality = async () => {
      try {
        const res = await axios.get("https://lunarlayer-server.onrender.com/tonality");
        setTonality(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTonality();
  }, []);

  console.log('fetched the following:');
  console.log(strings);
  console.log(tonality);
  
  return (
    <Context.Provider value={[strings, setStrings, tonality, setTonality]}>
      {children}
    </Context.Provider>
  )
}

export const Context = React.createContext();
export default GlobalState;