import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {CBP_APPLICATIONS_SERVICE, CBP_USER_SERVICE, CBPAppHeaderModule, CBPRootModule} from 'ngx-cbp-theme';
import {MyUserService} from './my-user.service';
import {MyApplicationsService} from './my-applications.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        CBPRootModule,
        CBPAppHeaderModule
      ],
      providers: [
        { provide: CBP_USER_SERVICE,          useClass: MyUserService },
        { provide: CBP_APPLICATIONS_SERVICE,  useClass: MyApplicationsService }
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Product create');
  }));
});
