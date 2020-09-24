import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
    
    this.loading = false;    
  }

  buscar(termino: string) {

    this.loading = true;

    this.spotify.getArtists(termino)
        .subscribe( (data: any) => { 
          this.artistas = data;
          this.loading = false;
        });
  }

}
