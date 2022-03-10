import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAllMovie } from "../store/booking";
import alldata from "../data.json";

// import { dhruv } from "./Acordion";
import Hall from "./Hall";
function Screen2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const hallName = searchParams.get("hallName");
  const moviename = searchParams.get("moviename");

  const data = useSelector((element) => {
    return element.allItem;
  });

  
  const currenthall = data.filter((element) => element.name == moviename);
  const hall = currenthall[0].cinema_halls;

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
