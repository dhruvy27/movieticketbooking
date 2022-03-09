import React from 'react'
import './Modal.css'

export default function Modal(props) {
    if(!props.show){
        return null
    }
    const onDataSubmit = ()=>{

    }
  return (
    <div className='modal'>
        <div className='modal-content'>
            <div className='modal-header'>
                <h3>This is the Title</h3>
            </div>
            <div className='modal-body'>
                <form>
                    <label>Card number</label>
                    <input type="text"></input><br/>
                    <label>Cvv</label>
                    <input type="text"></input><br/>
                    <button>Submit</button>
                </form>
            </div>
            <div className='modal-footer'>
                <button onClick={props.onClose} >Close</button>
            </div>
        </div>
    </div>
  )
}
