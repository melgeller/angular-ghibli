import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { FilmsComponent } from './pages/films/films.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { FilmscardComponent } from './pages/films/components/filmscard/filmscard.component';
import { FilmsdetailComponent } from './pages/filmsdetail/filmsdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    FilmsComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    FilmscardComponent,
    FilmsdetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
