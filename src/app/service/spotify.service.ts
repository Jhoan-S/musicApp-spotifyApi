import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQARnFIwymE457xD3NpxUg_JkINVzkvBpJ4qnrvBp7LXmuLUdD8U4oapkan5sDPiexZ9R1XeOxxsUYIn-lE'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
                .pipe( map( data => data['albums'].items));
  }

  getArtists(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string ){
    
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string ){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                .pipe( map( tracks => tracks['tracks'] ) );
  }
}
