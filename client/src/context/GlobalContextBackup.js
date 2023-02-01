import React, { useState, useEffect } from "react";
import axios from 'axios';

export const GlobalContext = React.createContext();

export default function GlobalContextProvider({ children }) {
  const [strings,  setStrings]  = useState([]); // id/int number/int note/varchar
  const [tonality, setTonality] = useState([]); // id/int note/varchar scale/varchar
  const notes = [
    {name: "C",  color: "white", alternateName: [null], sharpsFlats: []},
    {name: "C#", color: "black", alternateName: ["Db"], sharpsFlats: ["Bb", "Eb", "Ab", "Db", "Gb"]},
    {name: "D",  color: "white", alternateName: [null], sharpsFlats: ["F#", "C#"]},
    {name: "D#", color: "black", alternateName: ["Eb"], sharpsFlats: ["Bb", "Eb", "Ab"]},
    {name: "E",  color: "white", alternateName: [null], sharpsFlats: ["F#", "C#", "G#", "D#"]},
    {name: "F",  color: "white", alternateName: [null], sharpsFlats: ["Bb"]},
    {name: "F#", color: "black", alternateName: ["Gb"], sharpsFlats: ["F#", "C#", "G#", "D#", "A#", "E#"]},
    {name: "G",  color: "white", alternateName: [null], sharpsFlats: ["F#"]},
    {name: "G#", color: "black", alternateName: ["Db"], sharpsFlats: ["Bb", "Eb", "Ab", "Db"]},
    {name: "A",  color: "white", alternateName: [null], sharpsFlats: ["F#", "C#", "G#"]},
    {name: "A#", color: "black", alternateName: ["Db"], sharpsFlats: ["Bb", "Eb"]},
    {name: "B",  color: "white", alternateName: [null], sharpsFlats: ["F#", "C#", "G#", "D#", "A#"]},
    // "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];

  useEffect(() => {
    const fetchStrings = async () => {
      try {
        const res = await axios.get("https://lunarlayer-server.onrender.com/strings");
        setStrings(res.data);
        // console.log("res.data[0]: " + res.data);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchTonality = async () => {
      try {
        const res = await axios.get("https://lunarlayer-server.onrender.com/tonality");
        setTonality(res.data[0]);
        // console.log("res.data[0]: " + res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log('fetchStrings();');
    fetchStrings();
    // console.log('fetchTonality();');
    fetchTonality();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        strings, setStrings,
        tonality, setTonality,
        notes
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
