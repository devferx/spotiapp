import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista: any;
  topTracks: any[];
  loading = false;
  constructor(
    private spotify: SpotifyService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.getArtista(id);
      this.getTopTracks(id);
    });
  }

  ngOnInit() {}

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe(resp => (this.topTracks = resp));
  }
}
