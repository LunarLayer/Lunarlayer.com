import { BrowserRouter, Routes, Route } from "react-router-dom";

import './basics/reset.css';
import './basics/fonts.css';
import './basics/variables.scss';

// import Lunarlayer from "./pages/lunarlayer/Lunarlayer";
import ChordScaleFinder from "./pages/chord-scale-finder/ChordScaleFinder";

import React from "react";
import Lunarlayer from "pages/lunarlayer/Lunarlayer";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<ChordScaleFinder />} /> */}
          <Route path="/" element={<Lunarlayer />} />
          <Route path="/chord-scale-finder" element={<ChordScaleFinder />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
