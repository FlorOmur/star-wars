import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";


const Species = () => {

  const [species, setSpecies] = useState({})
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/species?page=${page+1}`)
      .then((res) => {
        setSpecies(res.data)
        setIsLoading(false)
      })
  },[page])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div>
      <div>
        {
          Array(Math.ceil(species.count / 10)).fill(0).map((buttonNum, idx) => (
            <button className="item-btn"
                    key={idx}
                    onClick={() => setPage(idx)}
            >{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          species.results.map((view, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <Link to={`/species/${10 * +page + index+1}`}>
                  <img src={`https://starwars-visualguide.com/assets/img/species/${10 * page + index+1}.jpg`}
                       className="element-img" alt="img"/>
                  <h2>{view.name}</h2>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Species;