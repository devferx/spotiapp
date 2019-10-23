import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  clientId = '0fd33832eaaf44559e99cf0e808d2487';
  clientSecret = '61ab003a95e042999a8b3bbac4f18aba';
  token: string;

  constructor(private http: HttpClient) {}

  getToken() {
    const url = `http://spotify-get-token.herokuapp.com/spotify/${this.clientId}/${this.clientSecret}`;
    if (this.token) {
      return;
    }
    return fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.token = `${data['token_type']} ${data['access_token']}`;
      });
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization: this.token
    });
    const url = `https://api.spotify.com/v1/${query}`;
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map(data => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(
      map(data => data['artists'].items)
    );
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`).pipe(
      map(resp => resp['tracks'])
    );
  }
}
