import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Events from "./Components/Events";
import Team from "./Components/Team";
import ESports from "./Components/ESports";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/events" element={<Events />} />
      </Routes>
      <Routes>
        <Route exact path="/team" element={<Team />} />
      </Routes>
      <Routes>
        <Route exact path="/esports" element={<ESports />} />
      </Routes>
    </Router>
  );
}

export default App;
