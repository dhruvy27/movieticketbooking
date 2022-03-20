import data from '../data.json'
import { addAllMovie,changeStatus,successfullPayment } from './actions'


export function homereduceraction(alldata){
    return{
        type:addAllMovie,
        payload:alldata
    }
}

export const homereducer =(state = {allItem:[]}, action)=>{
    
    switch(action.type){
        case addAllMovie:
            return {...state,allItem:data}
        default:
            return state
    }
}