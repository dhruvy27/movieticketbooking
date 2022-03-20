import {createStore,combineReducers} from 'redux';
import {cinemahallreducer} from './cinemahallreducer'
import {homereducer} from './homereducer'


const rootReducer = combineReducers({
    home:homereducer,
    cinema:cinemahallreducer
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({type:"addAllMovie"})

export default store
