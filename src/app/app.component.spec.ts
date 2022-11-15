import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'study1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('study1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('.main') as HTMLLinkElement;

    expect(element.getAttribute('href')).toContain(environment.rooting + '/main');
    expect(compiled.querySelector('.twowaybinding')?.getAttribute('href')).toContain(environment.rooting + '/twowaybinding');
    expect(compiled.querySelector('.twowaybindingservice')?.getAttribute('href')).toContain(environment.rooting +'/twowaybindingservice');
    ///?は、オプショナルチェーン//
  });
});
