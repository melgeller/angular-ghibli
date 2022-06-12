import { FilmsInterface } from './../../models/films.models';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filmsdetail',
  templateUrl: './filmsdetail.component.html',
  styleUrls: ['./filmsdetail.component.scss']
})
export class FilmsdetailComponent implements OnInit {
public film!: any;
  constructor(private filmsList: FilmsService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params)=>{
      const filmID = params.get('filmID')
      this.filmsList.getFilm(filmID).subscribe((data: any)=>{
        this.film = data;
        console.log(this.film);
        
      })
      
    })
  }

}
