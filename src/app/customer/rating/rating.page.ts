import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  public form = [
    { val: 'Happy', isChecked: true },
    { val: 'Sad', isChecked: false },
    { val: 'Angry', isChecked: false },
    { val: 'ExtremelyHappy', isChecked: false },
    { val: 'HighlyDissapointed', isChecked: false },

  ];

  constructor() { }

  ngOnInit() {
  }

}
