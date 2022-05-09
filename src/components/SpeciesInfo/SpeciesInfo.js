import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";


const SpeciesInfo = () => {
  const {view} = useParams()
  const [species, setSpecies] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/species/${view}`)
      .then((res) => {
        setSpecies(res.data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div>
      <div className="row">
        <div className="col-4">
          <img src={`https://starwars-visualguide.com/assets/img/species/${view}.jpg`}
               className="element-img" alt="img"/>
        </div>
        <div className="col-8">
          <ul>
            <li className="charactersInfo"><b>{species.name}</b></li>
            <li className="charactersInfo">Average height: {species.average_height} cm</li>
            <li className="charactersInfo">Average lifespan: {species.average_lifespan} years</li>
            <li className="charactersInfo">Classification: {species.classification}</li>
            <li className="charactersInfo">Designation: {species.designation}</li>
            <li className="charactersInfo">Eye colors: {species.eye_colors}</li>
            <li className="charactersInfo">Language: {species.language}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpeciesInfo;