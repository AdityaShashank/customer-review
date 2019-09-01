import { createReducer, on, State } from '@ngrx/store'
import { addBasicInfo } from './customer.actions'

export const initialState = {
    name: "",
    phoneNo: 0,
    email: "",
    rating: "happy",
    feedback: ""
}

export const customerReducer = (state: any = initialState, action) => {
    let temp = Object.assign({}, action)
    delete temp['type']
    switch (action.type) {
        case 'ADD_BASIC_INFO':
            return Object.assign(state, temp);
        case 'ADD_RATING':
            return Object.assign(state, temp);
        case 'ADD_FEEDBACK':
            return Object.assign(state, temp);
        case 'RESET':
            return {
                name: "",
                phoneNo: 0,
                email: "",
                rating: "happy",
                feedback: ""
            };
        default:
            return state
    }
}