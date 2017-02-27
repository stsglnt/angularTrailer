import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable () 
    export class MovieService {
        apikey: string;
        searchStr: string;
        
        constructor (private _jsonp: Jsonp, private _http: Http){
              this.apikey = '7cd5735f8cfc2d5dcda5d8dfce0e427e';

        }
        getPopular(){
            return this._http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='+this.apikey)
                .map(res => res.json());
                
        }
        getShows(){
  
            
            return this._http.get('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2016-12-01&primary_release_date.lte=2017-06-22&api_key='+this.apikey)
                .map(res => res.json());
                
       
        }
        
        searchMovies(searchStr: string) {
            
            return this._http.get('https://api.themoviedb.org/3/search/movie?query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apikey)
                .map(res => res.json());

        }
        getMovie(id:string){
              return this._http.get('https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apikey)
                .map(res => res.json());

        }

        getTrailer(id:string) {
            return this._http.get('https://api.themoviedb.org/3/movie/'+id+'/videos?api_key='+this.apikey)
                .map(res => res.json());
                
        }

    }