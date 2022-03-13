import React from 'react'

import  './Accordion.css';

function Trigger(props) {
  return (
    <div>
        <h3 className='movie-title'>{props.moviename}</h3>
        <img  src={props.link} id="poster"/>
    </div>
  )
}

export default Trigger