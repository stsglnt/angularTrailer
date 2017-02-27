import { Component} from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
  selector: 'trailer',
  templateUrl: './trailer.component.html'
})


export class TrailerComponent {
   private router: ActivatedRoute; 

    constructor(private _movieService: MovieService, private _route: ActivatedRoute){

    }
    // ngOnInit() {
      //  this.router.params.subscribe((params) => {
         //   let id = params['id'];
     //       this._movieService.getMovie(id).subscribe(movie => {
      //          this.movie = movie;
                
   //         this._movieService.getTrailer(id).subscribe(trailers => {
    //            this.trailers = trailers.results[0];
   //             console.log(this.trailers)
  //          })  
         
 //           });
 //       });
}