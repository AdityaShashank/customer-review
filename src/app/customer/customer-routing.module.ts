import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPage } from './customer.page';

const routes: Routes = [
    {
     path: 'tabs',
     component: CustomerPage,
     children: [
        {
            path: 'yourdetails',
            loadChildren: './yourdetails/yourdetails.module#YourdetailsPageModule',
        },
        {
            path: 'rating',
            loadChildren: './rating/rating.module#RatingPageModule',
        },
        {
            path: 'reviews',
            loadChildren: './reviews/reviews.module#ReviewsPageModule',
        }

     ]
    },
    {
        path: '',
        redirectTo: '/customer/tabs',
        pathMatch: 'full',
    },  { path: 'thanks', loadChildren: './thanks/thanks.module#ThanksPageModule' }

];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRouting {}
