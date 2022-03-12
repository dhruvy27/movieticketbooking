import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAllMovie } from "../../store/booking";
import data from "../../data.json";

import Hall from "./Hall";


function Screen2() {
  
  const dispatch = useDispatch()
  const store = useSelector((element)=>{ return element.allItem })
 
  useEffect(()=>{dispatch(addAllMovie({
      allItem:data
  }))},[])


  const [searchParams, setSearchParams] = useSearchParams();
  const hallName = searchParams.get("hallName");
  const moviename = searchParams.get("moviename");
  const currenthall = store.filter((element) => element.name == moviename);
  console.log(store)

  return (
    <div>
      <div className="title">{moviename}</div>
      {currenthall[0].cinema_halls.map((element) => {
        return (
          <div>
            {element.name == hallName ? (
              <Hall
                hall={element}
                key={element.hall_id}
                movie_id={moviename}
              ></Hall>
            ) : null}
          </div>
        );
      })}
      ;
    </div>
  );
}

export default Screen2;
