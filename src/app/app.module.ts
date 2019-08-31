import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgModel } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YourdetailsPage } from './customer/yourdetails/yourdetails.page';
import { ReviewsPage } from './customer/reviews/reviews.page';
import { RatingPage } from './customer/rating/rating.page';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store'
import { customerReducer } from './customer.reducer'
import {StoreDevtoolsModule} from'@ngrx/store-devtools'
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  // tslint:disable-next-line: deprecation
  imports: [BrowserModule, 
    HttpModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    StoreModule.forRoot({customer:customerReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
