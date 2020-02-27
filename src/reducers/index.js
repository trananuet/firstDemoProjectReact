import {combineReducers} from 'redux';
import reducer from './reducer';
import storeComputer from './storeComputer';

const allReducers = combineReducers({
    computers: storeComputer,
    reducer: reducer
});

export default allReducers;