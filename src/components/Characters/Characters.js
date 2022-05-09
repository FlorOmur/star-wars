import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState({})
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/people?page=${page+1}`)
      .then((res) => {
        setCharacters(res.data)
        setIsLoading(false)
      })
  }, [page])

  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div>
      <div>
        {
          Array(Math.ceil(characters.count / 10)).fill(0).map((buttonNum, idx) => (
            <button className="item-btn"
                    key={idx}
                    onClick={() => setPage(idx)}
            >{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          characters.results.map((people, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <Link to={`/characters/${10 * +page + index+1}`}>
                  <img src={`https://starwars-visualguide.com/assets/img/characters/${10 * page + index+1}.jpg`}
                       className="element-img"/>
                  <h4>{people.name}</h4>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Characters;