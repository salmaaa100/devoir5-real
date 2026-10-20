import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Musician } from '../models/musician.model';
import { MusicianService } from '../services/musician.service';

@Component({
  selector: 'app-musicians',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './musicians.component.html',
  styleUrl: './musicians.component.css'
})
export class MusiciansComponent {
  musicians: Musician[];

  constructor(private musicianService: MusicianService) {
    this.musicians = musicianService.listeMusicians();
  }

  supprimerMusician(m: Musician): void {
    if (confirm('Etes-vous sûr de vouloir supprimer ce musicien ?')) {
      this.musicianService.supprimerMusician(m);
    }
  }
}
