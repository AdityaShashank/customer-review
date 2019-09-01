import {createSelector} from '@ngrx/store'
import { CustomerFeedbackModel } from './customer.model';

export const selectState = createSelector((state:CustomerFeedbackModel)=>{state},null);