import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routeReducer } from 'react-router-redux';

export default combineReducers({
    popup: popupReducer,
    routing: routeReducer
});
