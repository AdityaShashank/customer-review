import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CustomerPage } from './customer.page';
import { CustomerRouting } from './customer-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CustomerRouting
  ],
  declarations: [CustomerPage]
})
export class CustomerPageModule {}
