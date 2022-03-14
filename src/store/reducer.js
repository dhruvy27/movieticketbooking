import data from '../data.json'

const reducer =(state ={allItem:[],selectedSeats:{},confirmSeats:{}}, action)=>{
    
    switch(action.type){
        case "addAllMovie":
            return {...state,allItem:data}
        case "changeStatus":
            return {
                ...state,
                selectedSeats:{
                    ...state.selectedSeats,
                        [action.payload.id]:state.selectedSeats[action.payload.id]!=undefined?!state.selectedSeats[action.payload.id]:true
                    }
            }
        case "successfullPayment":
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
        case "unsuccessfullPayment":
            return {
                ...state,
                selectedSeats:{}
            }
    }
}

export default reducer