import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifecycleComponent } from './lifecycle.component';
import { By } from '@angular/platform-browser';

describe('LifecycleComponent', () => {
  let component: LifecycleComponent;
  let fixture: ComponentFixture<LifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onclickのテスト', () => {
  const button = fixture.debugElement.query(By.css('.one')).nativeElement as HTMLButtonElement;
  button.click();
  expect(component.parentData as number).toContain(1);
  })
});
