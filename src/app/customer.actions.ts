import {createAction, props} from '@ngrx/store'
import { Details } from './customer/yourdetails/yourdetails.model';

export const addBasicInfo = createAction('ADD_BASIC_INFO',props<Details>());

