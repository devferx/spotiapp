import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading = true;
  constructor(private spotifyService: SpotifyService) {}
  async ngOnInit() {
    await this.spotifyService.getToken();
    this.spotifyService.getNewReleases().subscribe(data => {
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
}
