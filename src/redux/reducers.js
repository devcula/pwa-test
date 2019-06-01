import { CHANGE_SEARCH_FIELD, UPDATE_ROBOTS } from './constants';

const initialState = {
    searchField: "",
    robots: []
}

export const appReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, {searchField: action.payload});
        case UPDATE_ROBOTS:
            return Object.assign({}, state, {robots: action.payload});
        default:
            return state;
    }
}