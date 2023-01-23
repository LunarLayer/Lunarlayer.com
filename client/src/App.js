import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalState from './GlobalState';

import Lunarlayer from "./pages/lunarlayer/Lunarlayer";
import ChordScaleFinder from "./pages/chord-scale-finder/ChordScaleFinder";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lunarlayer/>} />
            <Route path="/chord" element={<ChordScaleFinder/>} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
