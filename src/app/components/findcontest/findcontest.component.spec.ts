/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FindcontestComponent } from './findcontest.component';

describe('FindcontestComponent', () => {
  let component: FindcontestComponent;
  let fixture: ComponentFixture<FindcontestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindcontestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindcontestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
