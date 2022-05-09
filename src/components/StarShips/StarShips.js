import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Spinner from "../Spinner";

const StarShips = () => {
  const [ships, setShips] = useState({})
  const [page, setPage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://swapi.dev/api/starships?page=${page+1}`)
      .then((res) => {
        setShips(res.data)
        setIsLoading(false)
      })
  }, [page])

  if (isLoading){
    return <Spinner />
  }

  return (
   <div>
     <div>
       {
         Array(Math.ceil(ships.count / 10)).fill(0).map((buttonNum, idx) => (
           <button className="item-btn"
                   key={idx}
                   onClick={() => setPage(idx)}
           >{idx + 1}</button>
         ))
       }
     </div>

     <div className="row">
       {
         ships.results.map((ship, index) => (
           <div key={index} className="item-col">
             <div className="element-item">
               <Link to={`/starships/${10 * +page + index+1}`}>
                 <img src={`https://starwars-visualguide.com/assets/img/starships/${10 * page + index+1}.jpg`}
                      className="element-img"/>
                 <h4>{ship.name}</h4>
               </Link>
             </div>
           </div>
         ))
       }
     </div>
   </div>
  );
};

export default StarShips;