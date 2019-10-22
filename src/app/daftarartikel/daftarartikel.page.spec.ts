import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarartikelPage } from './daftarartikel.page';

describe('DaftarartikelPage', () => {
  let component: DaftarartikelPage;
  let fixture: ComponentFixture<DaftarartikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarartikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarartikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
