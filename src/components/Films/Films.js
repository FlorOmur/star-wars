import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Films = () => {
  const [films, setFilms] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    axios('https://swapi.dev/api/films')
      .then((res) => {
        setFilms(res.data)
        setIsLoading(false)
      })
  })

  if (isLoading){
    return <Spinner/>
  }

  return (
    <div className="row">
      {
        films.results.map((film, index) => (
          <div key={index} className="item-col">
            <div className="element-item">
              <Link to={`/films/${index+1}`}>
                <img src={`https://starwars-visualguide.com/assets/img/films/${index+1}.jpg`}
                     className="element-img" alt="img"/>
                <h4>{film.title}</h4>
              </Link>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Films;