import { FilmsService } from './../../services/films.service';
import { FilmsInterface } from './../../models/films.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
})
export class FilmsComponent implements OnInit {
  public filmsList: FilmsInterface[] = [];

  constructor(public filmsService: FilmsService) {}

  ngOnInit(): void {
    this.filmsService.getFilms().subscribe((data: any) => {
      const filmsApi: FilmsInterface[] = data.map((film: any) => ({
        id: film.id,
        title: film.title,
        originalTitle: film.original_title,
        image: film.image,
        description: film.description,
        director: film.director,
        releaseDate: film.release_date,
        movieBanner: film.movie_banner,
      }));
      this.filmsList = filmsApi;
    });
  }
}
