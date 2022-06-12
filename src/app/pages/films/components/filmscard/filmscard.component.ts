import { FilmsInterface } from './../../../../models/films.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmscard',
  templateUrl: './filmscard.component.html',
  styleUrls: ['./filmscard.component.scss']
})
export class FilmscardComponent implements OnInit {
@Input() public film!: FilmsInterface
  constructor() { }

  ngOnInit(): void {
  }

}
