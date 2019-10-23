import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  @Input() items: any[] = [];
  constructor(private router: Router) {}

  ngOnInit() {}

  verArtista(item) {
    let artistaId;
    item.type === 'artist'
      ? (artistaId = item.id)
      : (artistaId = item.artists[0].id);
    this.router.navigate(['/artist', artistaId]);
  }
}
