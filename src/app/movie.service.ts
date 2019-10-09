import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Movie } from './Movie'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private selectedMovie$:Subject<Movie> = new Subject<Movie>()

  constructor() { }

  get currentMovie() {
    return this.selectedMovie$
  }

  changeSelectedMovie(movie:Movie) {
    this.selectedMovie$.next(movie)
  }

}
