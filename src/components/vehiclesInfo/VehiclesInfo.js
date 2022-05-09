import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const VehiclesInfo = () => {

  const {transport} = useParams()
  const [vehicles, setVehicles] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles/${transport}`)
      .then((res) => {
        setVehicles(res.data)
        setIsLoading(false)
      })
  })

  if(isLoading){
    return <Spinner />
  }
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={`https://starwars-visualguide.com/assets/img/vehicles/${transport}.jpg`}
               className="element-img" alt="img"/>
        </div>
        <div className="col-8">
          <ul>
            <li className="charactersInfo"><b>{vehicles.name}</b></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default VehiclesInfo;