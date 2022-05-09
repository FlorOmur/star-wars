import React, {useEffect, useState} from 'react';
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Vehicles = () => {

  const [vehicles, setVehicles] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)
  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles`)
      .then((res) => {
        setVehicles(res.data)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner/>
  }

  return (
    <div>
      <div>
        {
          Array(Math.ceil(vehicles.count / 10)).fill(0).map((buttonNum, idx) => (
            <button className="item-btn"
                    key={idx}
                    onClick={() => setPage(idx)}
            >{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          vehicles.results.map((people, index) => (
            <div key={index} className="item-col">
              <div className="element-item">
                <Link to={`/vehicles/${10 * +page + index+1}`}>
                  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${10 * page + index+1}.jpg`}
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

export default Vehicles;