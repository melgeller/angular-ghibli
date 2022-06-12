import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsdetailComponent } from './filmsdetail.component';

describe('FilmsdetailComponent', () => {
  let component: FilmsdetailComponent;
  let fixture: ComponentFixture<FilmsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
