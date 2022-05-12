import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoverfocusDirective } from './hoverfocus.directive';



describe('HoverfocusDirective', () => {
  let inputEl: DebugElement
  let fixture
  let component
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverfocusDirective, AppComponent]
    })

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    inputEl = fixture.debugElement.query(By.css('input'))
  })

  it('hovering over input', () => {

    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges()

    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue')

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges()

    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit')
  })
  it('should create an instance', () => {
    const directive = new HoverfocusDirective();
    expect(directive).toBeTruthy();
  });
});
