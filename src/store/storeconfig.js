//import {configureStore} from '@reduxjs/toolkit'
//import reducer from './booking.js'

//import { combineReducers } from '@reduxjs/toolkit';
//import {cinemahallreducer,homereducer} from './reducer'
import {createStore,combineReducers} from 'redux';
import {cinemahallreducer} from './cinemahallreducer'
import {homereducer} from './homereducer'

console.log(homereducer,"home")
console.log(cinemahallreducer,"hall")

const rootReducer = combineReducers({
    home:homereducer,
    cinema:cinemahallreducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = configureStore({
//     reducer
// })

store.subscribe(()=>{console.log("action done",store.getState())})

store.dispatch({type:"addAllMovie"})

export default store
