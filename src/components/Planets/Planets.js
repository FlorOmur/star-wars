import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Planets = () => {

  const [planets, setPlanets] = useState({})
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/planets?page=${page+1}`)
      .then((res) => {
        setIsLoading(false)
        setPlanets(res.data)
      })
  },[page])

  if(isLoading){
    return <Spinner/>
  }

  return (
    <div>
      <div>
        {
          Array(Math.ceil(planets.count / 10)).fill(0).map((buttonNum, idx) => (
            <button className="item-btn"
                    key={idx}
                    onClick={() => setPage(idx)}
            >{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          planets.results.map((planet, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <Link to={`/planets/${10 * +page + index+1}`}>
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${10 * page + index+1}.jpg`}
                       className="element-img" alt="img"/>
                  <h4>{planet.name}</h4>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Planets;