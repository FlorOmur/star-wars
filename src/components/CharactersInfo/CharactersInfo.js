import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import "./Characters.css"

const CharactersInfo = () => {

  const {person} = useParams()
  const [characters, setCharacters] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/people/${person}`)
      .then((res) => {
        setCharacters(res.data)
        setIsLoading(false)
      })
  })

  if(isLoading){
    return <Spinner />
  }

  return (
    <div className="row">
      <div className="col-4">
        <img src={`https://starwars-visualguide.com/assets/img/characters/${person}.jpg`}
             className="element-img" alt="img"/>
      </div>
      <div className="col-8">
        <ul>
          <li className="charactersInfo"><b>{characters.name}</b></li>
          <li className="charactersInfo">Birth Year: {characters.birth_year}</li>
          <li className="charactersInfo">Height: {characters.height}</li>
          <li className="charactersInfo">Mass: {characters.mass}</li>
          <li className="charactersInfo">Gender: {characters.gender}</li>
          <li className="charactersInfo">Hair color: {characters.hair_color}</li>
          <li className="charactersInfo">Skin color: {characters.skin_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharactersInfo;