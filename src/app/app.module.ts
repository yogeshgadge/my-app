import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule , MatMenu} from '@angular/material';

import { AppComponent } from './app.component';

import {
  CBPRootModule,
  CBPAppHeaderModule,         // this is optional
  CBP_USER_SERVICE,           // must be provided to fetch CBP user logged in to display user name on CBP Header
  CBP_APPLICATIONS_SERVICE    // must be provided to get CBP applications (recent) for Applications menu on the CBP Header
} from 'ngx-cbp-theme' ;
import {MyUserService} from './my-user.service';
import {MyApplicationsService} from './my-applications.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    CBPRootModule,
    CBPAppHeaderModule
  ],
  exports: [MatMenuModule, MatMenu],
  providers: [
    { provide: CBP_USER_SERVICE,          useClass: MyUserService },
    { provide: CBP_APPLICATIONS_SERVICE,  useClass: MyApplicationsService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
