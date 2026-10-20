import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Musician } from '../models/musician.model';
import { Genre } from '../models/genre.model';
import { MusicianService } from '../services/musician.service';

@Component({
  selector: 'app-recherche-par-genre',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './recherche-par-genre.component.html'
})
export class RechercheParGenreComponent implements OnInit {
  musicians: Musician[] = [];
  genres: Genre[] = [];
  idGenre: number = 0;

  constructor(private musicianService: MusicianService) {}

  ngOnInit(): void {
    this.genres = this.musicianService.listeGenres();
    this.musicians = this.musicianService.listeMusicians();
  }

  onChange(): void {
    if (this.idGenre == 0) {
      this.musicians = this.musicianService.listeMusicians();
    } else {
      this.musicians = this.musicianService.rechercherParGenre(this.idGenre);
    }
  }
}
