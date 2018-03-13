import { Component, OnInit, ViewContainerRef, trigger, state, style, transition, animate   } from '@angular/core';
import { MovieService } from '../../services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';

import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { DomSanitizer} from '@angular/platform-browser';




@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  animations: [
      trigger('trailerPanel', [
            state('inactive', style({
                display: 'none',
                marginTop: '-320px',

            })),
            state('active', style ({
                display: 'block',
                marginTop: '0px',
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('400ms ease-out')),
      ]),
      trigger('trailersItself', [
            state('inactive', style({
                opacity: 0
                
            })),
            state('active', style({
                opacity: 1                

            })),
            transition('inactive => active', animate('900ms ease-in')),
            transition('active => inactive', animate('90ms ease-out')),
      ])
            
        ]
})
export class BannerComponent {
    state: string = 'inactive';
    noTrailers: boolean = false;
    movie: Object;
    key: string;
    key2: string;
    bgPhoto: any;
    alltrailers: Object;
    bg: any;
    element: any;
    trailerStatus: any;
    url; 
    a;
    testChange: any;
    url2; 
    getAlltrailer: any;
    constructor( 
         private _movieService: MovieService,
         private router: ActivatedRoute, 
         vcRef: ViewContainerRef, 
         private domSanitizer : DomSanitizer
          ) {
    }

       ngOnInit() {
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getMovie(id).subscribe(movie => {
                this.movie = movie;
                
            })
            this._movieService.getTrailer(id).subscribe(trailers => {
                
                this.alltrailers = trailers.results; 
                this.trailerStatus = () => {
                    if(trailers.results[0]){
                    this.noTrailers = true;
                } else {
                    this.noTrailers = false;
                }
                    return this.noTrailers;
            }
            this.a = this.trailerStatus();
            })
          });
        }
     openTrailers(){
            this.state = (this.state === 'inactive' ? 'active' : 'inactive');
     }
    } 
        
        
    


