import { CHANGE_SEARCH_FIELD, UPDATE_ROBOTS } from './constants';

export const setSearchField = (text) =>({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const updateRobots = (robotsList) => ({
    type: UPDATE_ROBOTS,
    payload: robotsList
})