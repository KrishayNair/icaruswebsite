import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import Team from "./Components/Team";
import ESports from "./Components/ESports";
import Contingent from "./Components/Contingent";
import Flagship from "./Components/Flagship";
import NonContingent from "./Components/NonContingent";

function App() {
  return (
    <Router>
      <div className="root-container overflow-hidden">
        <div className="position-fixed my-3 w-100" style={{ "paddingInline": "5rem", "zIndex": "100" }}>
        <Navbar />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/team" element={<Team />} />
        </Routes>
        <Routes>
          <Route exact path="/esports" element={<ESports />} />
        </Routes>
        <Routes>
          <Route exact path="/flagship" element={<Flagship />} />
        </Routes>
        <Routes>
          <Route exact path="/contingent" element={<Contingent />} />
        </Routes>
        <Routes>
          <Route exact path="/noncontingent" element={<NonContingent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
