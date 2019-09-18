import { Component, OnInit, Optional } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Details } from './yourdetails.model';
import { Store,select } from '@ngrx/store';
import {Observable} from 'rxjs';
import {addBasicInfo} from '../../customer.actions';

@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.page.html',
  styleUrls: ['./yourdetails.page.scss'],
})
export class YourdetailsPage {
  // TODO: Change this to redux store.
  details:Observable<Details>;

  constructor(private navCtrl: NavController,private store:Store<Details>) {
    this.details = store.pipe(select('customer'));
  }
  onDetails(form) {
    // TODO: Change this to redux reducer actions call   
    console.log(form.value);
    this.store.dispatch(addBasicInfo(form.value));
  }
  onClick() {
    this.navCtrl.navigateForward('/customer/yourdetails');
    // return this.http.post('api/users');
  }

  // TODO: Subscribe this component to redux event listener.

}
