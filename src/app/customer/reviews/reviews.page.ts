import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import {Observable} from 'rxjs';
import {addFeedback} from '../../customer.actions';
import { CustomerFeedbackModel } from '../customer.model';
import { AppStore } from 'src/app/app.store';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {

  // feedback:Observable<{feedback:string}>;
  customerFeedback:Observable<{CustomerFeedbackModel}>;

  constructor(private store:Store<AppStore>,private http:HttpClient) {
    // this.feedback = store.pipe(select('customer'))
    this.customerFeedback = store.pipe(select('customer'));
   }

  ngOnInit() {
  }

  onFeedbackChange(event){
    // let temp:CustomerFeedbackModel
    this.store.dispatch(addFeedback({feedback:event.detail.value}));
  }

  onSubmit(){
    // let currentState = this.customerFeedback[0]
    let temp = []
    this.customerFeedback.forEach((key)=>{
      temp.push(key);
    })
    let final = temp[0]
    console.log('state',final);
    this.http.post(environment.baseApiUrl+environment.baseAppService+'/add',final).subscribe(res=>{
      console.log('Done');
    })
  }
}
