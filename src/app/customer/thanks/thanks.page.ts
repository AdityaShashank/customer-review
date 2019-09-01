import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store'
import { reset } from 'src/app/customer.actions';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.page.html',
  styleUrls: ['./thanks.page.scss'],
})
export class ThanksPage implements OnInit {

  constructor(private store:Store<{}>) { }

  ngOnInit() {
  }
  reset(){
    this.store.dispatch(reset())
  }
}
