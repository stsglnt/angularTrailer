import { Component, ElementRef} from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PageScrollConfig }  from 'ng2-page-scroll';
declare var jQuery: any;
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html'
})


export class MovieComponent {
    popularMovies: Array<Object>;
    popularShows: Array<Object>;
    searchRes: Array<Object>;
    searchStr: string;
    error: boolean = true;
    toTop: any;
    imagePath: string;


    constructor(private _movieService: MovieService, private _route: ActivatedRoute, private _elementRef: ElementRef) {
        this.imagePath = '../../../musicTracks.jpg';
        this._movieService.getPopular().subscribe(res => {
          console.log('changes from branch');
            this.popularMovies = res.results;
        })
        this._movieService.getShows().subscribe(res => {
            this.popularShows = res.results;
        })

      PageScrollConfig.defaultDuration = 450;

    }
    searchMovies(){
        this._movieService.searchMovies(this.searchStr).subscribe(res => {
            this.searchRes = res.results;
            if(this.searchRes.length == 0) {
                this.error = true;
            } else this.error = false;
        })
    }


}
