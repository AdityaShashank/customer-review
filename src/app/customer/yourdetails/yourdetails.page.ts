import { Component, OnInit, Optional } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Details } from './yourdetails.model'
@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.page.html',
  styleUrls: ['./yourdetails.page.scss'],
})
export class YourdetailsPage {
  // TODO: Change this to redux store.
  public details: Details;

  constructor(private navCtrl: NavController) {
    this.details = new Details();
  }
  onDetails(form) {
    // TODO: Change this to redux reducer actions call   
    this.details.setBasicInfo(form.value.name, form.value.phoneNo, form.value.emailId);
    console.log(this.details)
  }
  onClick() {
    this.navCtrl.navigateForward('/customer/yourdetails');
    // return this.http.post('api/users');
  }

  // TODO: Subscribe this component to redux event listener.

}
