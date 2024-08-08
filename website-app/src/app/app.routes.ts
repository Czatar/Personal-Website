import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blogs', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];