import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const StarShipsInfo = () => {

  const {ship} = useParams()
  const [ships, setShips] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/starships/${ship}`)
      .then((res) => {
        setShips(res.data)
        setIsLoading(false)
      })
  })

if (isLoading){
  return <Spinner />
}

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={`https://starwars-visualguide.com/assets/img/starships/${ship}.jpg`}
               className="element-img"/>
        </div>
        <div className="col-8">
          <ul>
            <li className="charactersInfo"><b>{ships.name}</b></li>
            <li className="charactersInfo">Model: {ships.model} </li>
            <li className="charactersInfo">Manufacturer: {ships.manufacturer} </li>
            <li className="charactersInfo">Starship class: {ships.starship_class} </li>
            <li className="charactersInfo">Cost in credits: {ships.cost_in_credits} credits</li>
            <li className="charactersInfo">Max speed: {ships.max_atmosphering_speed}</li>
            <li className="charactersInfo">Hyperdrive rating: {ships.hyperdrive_rating}</li>
            <li className="charactersInfo">Length: {ships.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StarShipsInfo;