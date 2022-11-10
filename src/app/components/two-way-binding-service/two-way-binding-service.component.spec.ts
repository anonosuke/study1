import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindingServiceComponent } from './two-way-binding-service.component';

describe('TwoWayBindingServiceComponent', () => {
  let component: TwoWayBindingServiceComponent;
  let fixture: ComponentFixture<TwoWayBindingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
