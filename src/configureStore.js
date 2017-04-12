import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
export default function configureStore(initilState){
    return createStore(rootReducer, initilState, applyMiddleware(reduxImmutableStateInvariant()));
}