import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const PlanetsInfo = () => {

  const {planet} = useParams()
  const [planets, setPlanets] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/planets/${planet}`)
      .then((res) => {
        setIsLoading(false)
        setPlanets(res.data)
      })
  },[])

  if (isLoading){
    return <Spinner/>
  }

  return (
    <div className="row">
      <div className="col-4">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet}.jpg`}
             className="element-img" alt="img"/>
      </div>
      <div className="col-8">
        <ul>
          <li className="charactersInfo"><b>{planets.name}</b></li>
          <li className="charactersInfo">Climate: {planets.climate}</li>
          <li className="charactersInfo">Diameter: {planets.diameter}</li>
          <li className="charactersInfo">Gravity: {planets.gravity}</li>
          <li className="charactersInfo">Orbital period{planets.orbital_period}</li>
          <li className="charactersInfo">Population: {planets.population}</li>
          <li className="charactersInfo">Terrain{planets.terrain}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlanetsInfo;