import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import "./FilmInfo.css";

const FilmInfo = () => {
  const {movie} = useParams()
  const [film, setFilm] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/films/${movie}`)
      .then((res) => {
        setFilm(res.data)
        setIsLoading(false)
      })
  },[])

  if (isLoading){
    return <Spinner />
  }

  return (
    <div className="row">
      <div className="col-4">
        <img src={`https://starwars-visualguide.com/assets/img/films/${movie}.jpg`}
             className="element-img" alt="img"/>
      </div>
      <div className="col-8 display-8">
        <ul>
          <li className="info-film"><b>{film.title}</b></li>
          <li className="info-film">Episode: {film.episode_id}</li>
          <li className="info-film">Release date: {film.release_date}</li>
          <li className="info-film">Director: {film.director}</li>
          <li className="info-film">Producer: {film.producer}</li>
          <li className="info-film">Opening_crawl: {film.opening_crawl}</li>
        </ul>

      </div>
    </div>
  );
};

export default FilmInfo;