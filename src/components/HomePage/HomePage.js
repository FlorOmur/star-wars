import React from 'react';
import {Link} from "react-router-dom";
import "./HomePage.css"
import characters from "../../assets/imeges/character.jpg"
import films from "../../assets/imeges/films.jpg"
import species from "../../assets/imeges/species.jpg"
import starships from "../../assets/imeges/starships.jpg"
import vehicles from "../../assets/imeges/vehicles.jpg"
import planets from "../../assets/imeges/planets.jpg"


const HomePage = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Link to="/characters">
          <div className="category-items">
            <img src={characters} alt="img"/>
          </div>
        </Link>
        <h3 className="title">Characters</h3></div>
      <div className="col-4">
        <Link to="/films">
          <div className="category-items">
            <img src={films} alt="img"/>
          </div>
        </Link>
        <h3 className="title">Films</h3></div>
      <div className="col-4">
        <Link to="/species">
          <div className="category-items">
            <img src={species} alt="img"/>
          </div>
        </Link>
        <h3 className="title">Species</h3></div>
      <div className="col-4">
       <Link to="/starships">
         <div className="category-items">
           <img src={starships} alt="img"/>
         </div>
       </Link>
        <h3 className="title">Star ships</h3></div>
      <div className="col-4">
        <Link to="vehicles">
          <div className="category-items">
            <img src={vehicles} alt="img"/>
          </div>
        </Link>
        <h3 className="title">Vehicles</h3></div>
      <div className="col-4">
       <Link to="planets">
         <div className="category-items">
           <img src={planets}alt="img" />
         </div>
       </Link>
        <h3 className="title">Planets</h3></div>
    </div>
  );
};

export default HomePage;