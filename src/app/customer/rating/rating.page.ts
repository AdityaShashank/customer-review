import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store'
import {Observable} from 'rxjs'
import {addRating} from '../../customer.actions'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  public ratings = [
    {
      id: '1',
      name: 'selectedRating',
      value: 'happy',
      text: 'Happy',
      checked: true,
    },
    {
      id: '2',
      name: 'selectedRating',
      value: 'sad',
      text: 'Sad',
      checked: false,
    },
    {
      id: '3',
      name: 'selectedRating',
      value: 'angry',
      text: 'Angry',
      checked: false,
    },

  ];
  selectedRating : Observable<string>;

  constructor(private store:Store<{rating:string}>) {
    this.selectedRating = store.pipe(select('customer'))
   }

  ngOnInit() {
  }

  onRating(form){
    console.log(form.value)
  }

  radioSelect(event) {
    console.log("radioSelect",event.detail);
    // this.selectedRating = event.detail.value;
    this.store.dispatch(addRating({rating:event.detail.value}))
  }
}
