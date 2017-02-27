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
                marginLeft: '-1200px', 
                
            })),
            state('active', style({
                marginLeft: '0px',
                

            })),
            transition('inactive => active', animate('400ms ease-in')),
            transition('active => inactive', animate('50ms ease-out')),
      ])
            
        ]
})
export class BannerComponent {
    state: string = 'inactive';
    movie: Object;
    key: any;
    key2: any;
    bgPhoto: any;
    bg: any;
    element: any;
    url; 
    url2; 
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
                if (trailers.results[0] ) {
                    this.key = trailers.results[0].key;
                
             this.url = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.key);
                }
            })
            this._movieService.getTrailer(id).subscribe(trailers => {
                if (trailers.results[1] ) {
                    this.key2 = trailers.results[1].key;
                
             this.url2 = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.key2);
                }
            })
         
            });
      
       
         
        }
      

     openTrailers(){
         this.state = (this.state === 'inactive' ? 'active' : 'inactive');
     
        }
     }
        
        
    


