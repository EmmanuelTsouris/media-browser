import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { GridComponent } from './grid/grid.component';
import { WatchComponent } from './watch/watch.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'grid', component: GridComponent },
  { path: 'about', component: AboutComponent },
  { path: 'watch/:id', component: WatchComponent},
  { path: 'watch', redirectTo: '/grid' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
