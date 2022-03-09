import React, { useState } from "react";
import Seats from "./Seats";
import Cart from "./Cart";
import  './Seats.css';
import Modal from "./Modal";


function Hall(props){
    console.log(props)
    const hall = props.hall
    const [selectedSeat,setSelectedSeat] = useState([])
    const [show,setShow] = useState(false)
    return(
        
        <div >
            <div className="seat-container">
                {hall.seats.map((element)=>{
                    {console.log(props.hall.hall_id)}
                    return <Seats seat_info={element} key={element.seat_id} setSelectedSeat={setSelectedSeat} selectedSeat={selectedSeat} hall_id={props.hall.hall_id} movie_id={props.movie_id}></Seats>
                })}
            </div>
            <div className="main-div">
                <Cart selectedSeat={selectedSeat}></Cart>
            </div>
            <button onClick={()=> setShow(true)}>Show Modal</button>
            <div>
                <Modal onClose={()=>setShow(false)} show={show}></Modal>
            </div>
        </div>
    )
}

export default Hall