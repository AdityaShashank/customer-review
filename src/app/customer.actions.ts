import {createAction, props} from '@ngrx/store'
import { Details } from './customer/yourdetails/yourdetails.model';

export const addBasicInfo = createAction('ADD_BASIC_INFO',props<Details>());
export const addRating = createAction('ADD_RATING',props<{rating:string}>());
export const addFeedback = createAction('ADD_FEEDBACK',props<{feedback:string}>());
export const reset = createAction('RESET')
