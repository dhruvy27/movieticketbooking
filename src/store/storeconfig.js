//import {configureStore} from '@reduxjs/toolkit'
//import reducer from './booking.js'

import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = configureStore({
//     reducer
// })

store.subscribe(()=>{console.log("action done",store.getState())})

store.dispatch({type:"addAllMovie"})

export default store
