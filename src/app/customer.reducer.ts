import { createReducer, on, State } from '@ngrx/store'
import { addBasicInfo } from './customer.actions'

export const initialState = {
    name: "",
    phoneNo: 0,
    emailId: "",
    rating: "",
    feedback: ""
}

const _customerReducer = createReducer(initialState, on(addBasicInfo, state => Object.assign({ name: "updated" }, state)))

export const customerReducer = (state: any = initialState, action) => {
    console.log(action)
    let temp = Object.assign({}, action)
    delete temp['type']
    switch (action.type) {
        case 'ADD_BASIC_INFO':
            return Object.assign(state, temp);
        case 'ADD_RATING':
            return Object.assign(state, temp);
        default:
            return state
    }
}