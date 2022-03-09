import React, { useState } from "react";
import "./Seats.css";
import { useDispatch } from "react-redux";
//import { changeStatus } from "../store/booking.js";

function Seats({
  setSelectedSeat,
  seat_info,
  selectedSeat,
  hall_id,
  movie_id,
  onCard,
}) {
  const dispatch = useDispatch();
  const onSelected = (event) => {
    if (event.target.style.backgroundColor == "green") {
      event.target.style.backgroundColor = "cyan";

      selectedSeat = selectedSeat.filter((element) => {
        console.log(seat_info.seat_id, element);
        return seat_info.seat_id != element;
      });

      console.log(selectedSeat);
      setSelectedSeat(selectedSeat);

    } else {
      event.target.style.backgroundColor = "green";
      // selectedSeat.push(seat_info.seat_id)
      selectedSeat = [...selectedSeat, seat_info.seat_id];
      console.log(selectedSeat);
      setSelectedSeat(selectedSeat);
    }
  };

  return (
    <div>
      {/* {console.log(onCard)} */}
      {onCard.filter((ele) => ele == seat_info.seat_id).length == 1 ? (
        <div className="seat" id="seat" style={{ backgroundColor: "grey" }}>
          {seat_info.seat_id}{" "}
        </div>
      ) : seat_info.status === "unavailable" ? (
        <div className="seat" id="seat" style={{ backgroundColor: "#545454" }}>
          {seat_info.seat_id}
        </div>
      ) : (
        <div
          className="seat"
          id="seat"
          onClick={(event) => {
            onSelected(event);
          }}
        >
          {seat_info.seat_id}
        </div>
      )}
    </div>
  );
}
export default Seats;
