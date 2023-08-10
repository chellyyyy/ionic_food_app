import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FastfoodPage } from './fastfood.page';

describe('FastfoodPage', () => {
  let component: FastfoodPage;
  let fixture: ComponentFixture<FastfoodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FastfoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
