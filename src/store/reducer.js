import data from '../data.json'

const reducer =(state ={allItem:[]}, action)=>{
    
    switch(action.type){
        case "addAllMovie":
            return {allItem:data}
    }
}

export default reducer