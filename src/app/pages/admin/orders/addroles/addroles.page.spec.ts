import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddrolesPage } from './addroles.page';

describe('AddrolesPage', () => {
  let component: AddrolesPage;
  let fixture: ComponentFixture<AddrolesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrolesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
