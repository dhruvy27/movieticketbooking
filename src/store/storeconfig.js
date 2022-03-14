import {configureStore} from '@reduxjs/toolkit'
import reducer from './booking.js'

import {createStore} from 'redux';
import reducer from './reducers/reducers'

const store = createStore(reducer);

// const store = configureStore({
//     reducer
// })

export default store
