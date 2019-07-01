import { CHANGE_SEARCH_FIELD, UPDATE_ROBOTS } from './constants';
import {combineReducers} from 'redux';

const initialSearchFieldState = {
    searchField: ""
}

const initialRobotsState = {
    robots: []
}

const searchFieldReducer = (state = initialSearchFieldState, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const updateRobotsReducer = (state = initialRobotsState, action = {}) => {
    switch(action.type){
        case UPDATE_ROBOTS:
            return Object.assign({}, state, {robots: action.payload});
        default:
            return state;
    }
}

export const appReducer = combineReducers({searchFieldReducer, updateRobotsReducer});