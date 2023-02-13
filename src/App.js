import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import Team from "./Components/Team";
import ESports from "./Components/ESports";
import Contingent from "./Components/Contingent";
import Flagship from "./Components/Flagship";
import NonContigent from "./Components/NonContingent";

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route exact path="/contigent" element={<Contingent />} />
      </Routes>
      <Routes>
        <Route exact path="/noncontigent" element={<NonContigent />} />
      </Routes>
    </Router>
  );
}

export default App;
