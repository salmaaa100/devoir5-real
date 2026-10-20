import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Musician } from '../models/musician.model';
import { MusicianService } from '../services/musician.service';
import { SearchFilterPipe } from '../search-filter.pipe';

@Component({
  selector: 'app-recherche-par-nom',
  standalone: true,
  imports: [FormsModule, DatePipe, SearchFilterPipe],
  templateUrl: './recherche-par-nom.component.html'
})
export class RechercheParNomComponent implements OnInit {
  musicians: Musician[] = [];
  musiciansKeyup: Musician[] = [];
  searchTerm: string = '';

  constructor(private musicianService: MusicianService) {}

  ngOnInit(): void {
    this.musicians = this.musicianService.listeMusicians();
    this.musiciansKeyup = this.musicianService.listeMusicians();
  }

  onKeyUp(filterText: string): void {
    this.musiciansKeyup = this.musicianService.rechercherParNom(filterText);
  }
}
