import { TestBed, inject } from '@angular/core/testing';

import { MyApplicationsService } from './my-applications.service';
import {MyUserService} from './my-user.service';
import {CBP_USER_SERVICE} from 'ngx-cbp-theme';

describe('MyApplicationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyApplicationsService, MyUserService, {provide: CBP_USER_SERVICE, useExisting: MyUserService}]
    });
  });

  it('should be created', inject([MyApplicationsService], (service: MyApplicationsService) => {
    expect(service).toBeTruthy();
  }));
});
