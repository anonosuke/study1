import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChildComponent } from './child.component';
import { Component } from '@angular/core';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Inputのてすと', () => {
    component.num = 1;
    fixture.detectChanges();

    const nativeElement = fixture.nativeElement as HTMLElement;
    const input = nativeElement.querySelector('input') as HTMLInputElement
    expect(input.value as unknown as number).toContain(1);
  });

/*   it('Outputのテスト', () => {
    const component = fixture.componentInstance;
    spyOn(component.outputEvent, 'emit');

    const nativeElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');
    input.value = 999;
    input.dispatchEvent(new Event('keyup'));

    fixture.detectChanges();
    expect(component.outputEvent.emit as unknown as number).toHaveBeenCalledWith(999); */

    it('Outputのテスト', () => {
    component.num = 2;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('input')).nativeElement as HTMLInputElement;
    element.dispatchEvent(new Event('keyup'))

    component.outputEvent.subscribe(response => expect(response).toContain(2));

  })
});
