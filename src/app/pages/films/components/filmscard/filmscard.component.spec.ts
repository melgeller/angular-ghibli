import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmscardComponent } from './filmscard.component';

describe('FilmscardComponent', () => {
  let component: FilmscardComponent;
  let fixture: ComponentFixture<FilmscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
