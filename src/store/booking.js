import  {createSlice} from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name:"movie",
    initialState:{allItem:[],selectedSeats:{},confirmSeats:{},seats:[1,2,3,4,5,6,7,8,9,10]},
    reducers:{
        addAllMovie:(state,action)=>{
            state.allItem = action.payload.allItem
        }
        ,
        changeStatus:(state,action)=>{
            state.selectedSeats = {
                ...state.selectedSeats,
                    [action.payload.id]:state.selectedSeats[action.payload.id]!=undefined?!state.selectedSeats[action.payload.id]:true
                }
        },
        successfullPayment:(state,action)=>{
            if(Object.keys(action.payload).length!=0)
            {
                state.confirmSeats = {
                    ...state.confirmSeats,
                    ...state.selectedSeats,
                    [action.payload.id]:action.payload.status
                }
            }
            state.confirmSeats = {
                ...state.confirmSeats,
                ...state.selectedSeats,
            }
            state.selectedSeats={}
        },
        unsuccessfullPayment:(state, action)=>{
            //state.confirmSeats={}
            state.selectedSeats={}

        }
    }});

export const {addAllMovie,changeStatus,successfullPayment,unsuccessfullPayment} = itemSlice.actions;
export default itemSlice.reducer;