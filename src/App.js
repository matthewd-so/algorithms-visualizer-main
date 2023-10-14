import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import './App.css'
import PathfindingVS from './Pages/PathfindingVS'
import Home from './Pages/Home';
import SortingApp from './Pages/Sorting';

function App() {

  return (
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/path-finding" element={<PathfindingVS/>} />
            <Route exact path="/sorting" element={<SortingApp/>} />
          </Routes>
    </div>
  );
}

export default App;
