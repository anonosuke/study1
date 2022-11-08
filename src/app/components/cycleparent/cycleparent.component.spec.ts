import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleparentComponent } from './cycleparent.component';

describe('CycleparentComponent', () => {
  let component: CycleparentComponent;
  let fixture: ComponentFixture<CycleparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CycleparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
