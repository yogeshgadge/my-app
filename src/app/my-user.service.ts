import { Injectable } from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {CBPUser, CBPUserService} from 'ngx-cbp-theme';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class MyUserService implements  CBPUserService {

  private subject: ReplaySubject<CBPUser> = new ReplaySubject<CBPUser>();
  private loggedIn = false;

  constructor() { }

  getUser(): Subject<CBPUser> {
    return this.subject;
  }
  login(): Subject<CBPUser> {
    setTimeout(() => {
      this.loggedIn = true;
      const user = new CBPUser();
      user.firstName = 'First';
      user.lastName = 'LastName';
      this.subject.next(user);
    }, 3000);
    return this.subject;
  }


  logout(): void {
    this.loggedIn = false;
    this.subject.next(null);
    console.log('mock logout');
  }



}
