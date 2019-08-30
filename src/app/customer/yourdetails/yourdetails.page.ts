import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.page.html',
  styleUrls: ['./yourdetails.page.scss'],
})
export class YourdetailsPage implements OnInit {
  details: Details[] = [];
  addedDetails: Details[] = [];
  onDetails(form: NgForm) {
    this.details = this.addedDetails;
  }

  constructor(private navCtrl: NavController) { }
onClick() {
    this.navCtrl.navigateForward('/customer/yourdetails');
   // return this.http.post('api/users');
}
  ngOnInit() {
  }
}
