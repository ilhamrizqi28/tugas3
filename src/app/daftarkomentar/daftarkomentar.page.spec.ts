import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarkomentarPage } from './daftarkomentar.page';

describe('DaftarkomentarPage', () => {
  let component: DaftarkomentarPage;
  let fixture: ComponentFixture<DaftarkomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarkomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarkomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
