import { Routes } from '@angular/router';
import { MusiciansComponent } from './musicians/musicians.component';
import { AddMusicianComponent } from './add-musician/add-musician.component';
import { UpdateMusicianComponent } from './update-musician/update-musician.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

export const routes: Routes = [
  { path: 'musicians', component: MusiciansComponent },
  { path: 'add-musician', component: AddMusicianComponent },
  { path: 'updateMusician/:id', component: UpdateMusicianComponent },
  { path: 'rechercheParGenre', component: RechercheParGenreComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: '', redirectTo: 'musicians', pathMatch: 'full' }
];
