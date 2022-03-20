import data from '../data.json'
import { addAllMovie,changeStatus,successfullPayment,unsuccessfullPayment } from './actions'

export function selectedseatsaction(seats){
    return{
        type:successfullPayment,
        payload:seats 
    }
}

export function unsuccessfullaction(seats){
    return{
        type:unsuccessfullPayment,
        payload:seats 
    }
}

export function changestatusaction(seats){
    return{
        type:changeStatus,
        payload:seats 
    }
}

export const cinemahallreducer =(state ={selectedSeats:{},confirmSeats:{}}, action)=>{
    
    switch(action.type){
        case changeStatus:
            return {
                ...state,
                selectedSeats:{
                    ...state.selectedSeats,
                        [action.payload.id]:state.selectedSeats[action.payload.id]!=undefined?!state.selectedSeats[action.payload.id]:true
                    }
            }
        case successfullPayment:
            var current ={};
            if(Object.keys(action.payload).length!=0)
            {
                current["confirmSeats"] = {
                    ...state.confirmSeats,
                    ...state.selectedSeats,
                    [action.payload.id]:action.payload.status
                }
            }
            else{
                current["confirmSeats"]={
                    ...state.confirmSeats,
                    ...state.selectedSeats,
                }
            }

            current["selectedSeats"] = {}

            return {
                ...state,
                ...current
            }
        case unsuccessfullPayment:
            return {
                ...state,
                selectedSeats:{}
            }
        default:
           return state
    }
}