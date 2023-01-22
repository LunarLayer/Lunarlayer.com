import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lunarlayer from "./pages/lunarlayer/Lunarlayer";
import ChordScaleFinder from "./pages/chord-scale-finder/ChordScaleFinder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Lunarlayer/>} />
            <Route path="/chord-scale-finder" element={<ChordScaleFinder/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
