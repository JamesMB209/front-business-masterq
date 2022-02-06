import {LOAD_BUSINESS_FAILURE, LOAD_BUSINESS_OBJECT_SUCCESS } from './actions';

let initialState = {
    data: [],
}

export const businessObjectReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_BUSINESS_OBJECT_SUCCESS:
            return Object.assign({}, state, {...action.data})
        case LOAD_BUSINESS_FAILURE:
            return Object.assign({}, state, {...action.data})
        default:
            return state
    }
}