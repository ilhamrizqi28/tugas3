import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilkomentarPage } from './detilkomentar.page';

describe('DetilkomentarPage', () => {
  let component: DetilkomentarPage;
  let fixture: ComponentFixture<DetilkomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilkomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilkomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
