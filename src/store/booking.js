import  {createSlice} from "@reduxjs/toolkit";
const itemSlice = createSlice({
    name:"movie",
    initialState:{allItem:[],currentMovieName:"",currentHall:""},
    reducers:{
        addAllMovie:(state,action)=>{
            state.allItem = action.payload.allItem
        }
    }});
// console.log(itemSlice.actions)
console.log(itemSlice.actions);
export const {addAllMovie} = itemSlice.actions;
export default itemSlice.reducer;