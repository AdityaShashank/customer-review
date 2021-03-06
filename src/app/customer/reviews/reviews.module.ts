import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReviewsPage } from './reviews.page';
import { BrowserModule } from '@angular/platform-browser';

export class AppModule { }

const routes: Routes = [
  {
    path: '',
    component: ReviewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    BrowserModule
  ],
  declarations: [ReviewsPage],
})
export class ReviewsPageModule {}
