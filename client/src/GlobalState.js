import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GlobalState = ({ children }) => {
  const [strings,  setStrings]  = useState([]);
  const [tonality, setTonality] = useState([]);

  useEffect(() => {
    const fetchStrings = async () => {
      try {
        const res = await axios.get("https://csfserver2.onrender.com/strings");
        setStrings(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchStrings();
  }, []);

  console.log(strings);
  
  return (
    <Context.Provider value={[strings, setStrings, tonality, setTonality]}>
      {children}
    </Context.Provider>
  )
}

export const Context = React.createContext();
export default GlobalState;