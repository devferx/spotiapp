import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading = false;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {}

  buscar(termino: string) {
    termino = termino.trim();
    this.loading = true;
    this.artistas = [];
    if (termino == '') {
      this.loading = false;
      return;
    }
    this.spotifyService.getArtistas(termino).subscribe(data => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
