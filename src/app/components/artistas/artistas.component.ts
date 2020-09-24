import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/service/spotify.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styles: []
})
export class ArtistasComponent implements OnInit {

  // @Input() item: any[] = [];
  artista: any = {};
  topTracks: any = [];

  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe( params => {
      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
      this.loading = false;     
    });
  }

  getArtista(id:string){
    this.spotify.getArtista(id)
        .subscribe( artista => {
          console.log(artista);
          this.artista = artista;
        });
  }

  getTopTracks( id:string ){
    this.spotify.getTopTracks(id)
        .subscribe( toptrack => {
          this.topTracks = toptrack;
          console.log(toptrack);
          
        });
  }
}
