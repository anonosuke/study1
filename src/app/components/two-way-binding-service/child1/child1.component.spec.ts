import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { NameService } from 'src/app/service/name.service';
import { Child1Component } from './child1.component';
import { By } from '@angular/platform-browser';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;
  const NameServiceMock = {
      name: String
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1Component ],
      providers: [FormBuilder, {provide: NameService, useValue: NameServiceMock}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('changeのテスト', () => {
    const element =fixture.debugElement.query(By.css('.name')).nativeElement as HTMLInputElement
    element.value = 'テスト太郎'
    element.dispatchEvent(new Event('change'))
    expect(NameServiceMock.name).toContain('テスト太郎')
  });
});
