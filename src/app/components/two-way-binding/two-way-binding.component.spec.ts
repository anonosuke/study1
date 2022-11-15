import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TwoWayBindingComponent } from './two-way-binding.component';

describe('TwoWayBindingComponent', () => {
  let component: TwoWayBindingComponent;
  let fixture: ComponentFixture<TwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('onclickのテスト', () => {
    const button = fixture.debugElement.query(By.css('.one')).nativeElement as HTMLButtonElement;
    button.click();
    expect(component.parentData as number).toContain(1);
  });
});
