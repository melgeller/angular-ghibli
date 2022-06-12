import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  public filmsUrl: string = "https://ghibliapi.herokuapp.com/films/"

  constructor(private httpClient: HttpClient) { }

  public getFilms() {
    return this.httpClient.get(this.filmsUrl)
  }

  public getFilm(filmID:any){
    return this.httpClient.get(`https://ghibliapi.herokuapp.com/films/${filmID}`)

  }
}
