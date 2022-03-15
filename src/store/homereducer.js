import data from '../data.json'
import { addAllMovie,changeStatus,successfullPayment } from './actions'

export const homereducer =(state = {allItem:[]}, action)=>{
    
    switch(action.type){
        case addAllMovie:
            return {...state,allItem:data}
        default:
            return state
    }
}