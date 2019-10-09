import { Component, OnInit } from '@angular/core';
import { data } from '../mock-data'
import { Movie } from '../Movie'
import { MovieService } from '../movie.service'
import { Subject } from 'rxjs'



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults:Movie[] = data
  private search$:Subject<string> = new Subject<string>()
  fetching:boolean = false
  constructor(private movieService:MovieService) { }

  ngOnInit() {
  }

  searchQuery(query:string) {
    console.log(query)
  }

  setCurrentMovie(movie:Movie) {
    this.movieService.changeSelectedMovie(movie)
  }

}
