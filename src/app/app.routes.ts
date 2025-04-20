import { Routes } from '@angular/router';

// ici on importe tous les composants nécessaires
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { EtudiantComponent } from './dashboard/etudiant/etudiant.component';
import { FormateurComponent } from './dashboard/formateur/formateur.component';

// ici on définit toutes les routes
export const routes: Routes = [
  { path: '', component: HomeComponent },          // Accueil
  { path: 'login', component: LoginComponent },     // Login
  { path: 'admin', component: AdminComponent },     // Dashboard Admin
  { path: 'etudiant', component: EtudiantComponent }, // Dashboard Étudiant
  { path: 'formateur', component: FormateurComponent }, // Dashboard Formateur
  { path: '**', redirectTo: '' }                    // Si l'URL n'existe pas, on redirige vers l'accueil
];
