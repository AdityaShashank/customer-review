import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { YourdetailsPage } from './yourdetails.page';
import { Details } from './yourdetails.model';
const routes: Routes = [
  {
    path: '',
    component: YourdetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YourdetailsPage]
})
export class YourdetailsPageModule {
}
