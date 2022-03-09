import {configureStore} from '@reduxjs/toolkit'
import reducer from './booking.js'

const store = configureStore({
    reducer
})

export default store
