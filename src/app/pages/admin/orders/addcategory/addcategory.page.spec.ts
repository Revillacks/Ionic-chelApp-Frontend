import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcategoryPage } from './addcategory.page';

describe('AddcategoryPage', () => {
  let component: AddcategoryPage;
  let fixture: ComponentFixture<AddcategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
