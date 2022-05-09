import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage";
import Characters from "./components/Characters";
import Species from "./components/Species";
import Films from "./components/Films";
import Header from "./components/Header";
import FilmInfo from "./components/FilmInfo";
import CharactersInfo from "./components/CharactersInfo";
import SpeciesInfo from "./components/SpeciesInfo";
import StarShips from "./components/StarShips";
import StarShipsInfo from "./components/StarShipsInfo";
import Vehicles from "./components/Vehicles";
import VehiclesInfo from "./components/vehiclesInfo";
import Planets from "./components/Planets";
import PlanetsInfo from "./components/PlanetsInfo";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/characters" element={<Characters />}/>
            <Route path="/characters/:person" element={<CharactersInfo />}/>
            <Route path="/films" element={<Films />}/>
            <Route path="/films/:movie" element={<FilmInfo />}/>
            <Route path="/species" element={<Species />}/>
            <Route path="/species/:view" element={<SpeciesInfo />}/>
            <Route path="/starShips" element={<StarShips />}/>
            <Route path="/starShips/:ship" element={<StarShipsInfo />}/>
            <Route path="/vehicles" element={<Vehicles />}/>
            <Route path="/vehicles/:transport" element={<VehiclesInfo />}/>
            <Route path="/planets" element={<Planets />}/>
            <Route path="/planets/:planet" element={<PlanetsInfo />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
