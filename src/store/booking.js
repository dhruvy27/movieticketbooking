import  {createSlice} from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name:"movie",
    initialState:{allItem:[],currentMovieName:"",currentHall:""},
    reducers:{
        addAllMovie:(state,action)=>{
            state.allItem = action.payload.allItem
        }
        ,
        changeStatus:(state,action)=>{
            const result = state.allItem.map((element)=>{
                if(action.payload.movie_id==element.name ){
                    element.cinema_halls.map(
                        (data)=>{
                            if(data.hall_id==action.payload.hall_id){
                                return data.seats.map(another=>{
                                    if(another.seat_id==action.payload.seat_id){
                                        console.log(another,{...another,status:!another.status})
                                        return {...another,status:!another.status}
                                    }
                                    else{
                                        console.log(data.hall_id,action.payload.hall_id)
                                        return another
                                    }
                                })
                            }
                            else{
                                console.log(data.hall_id,action.payload)
                                return data
                            }
                        }
                    )
                }
                else{
                    console.log(action.payload.movie_id,element.movie_id )
                    return element
                }
                
            }) 
        }
    }});
// console.log(itemSlice.actions)
console.log(itemSlice.actions);
export const {addAllMovie,changeStatus} = itemSlice.actions;
export default itemSlice.reducer;