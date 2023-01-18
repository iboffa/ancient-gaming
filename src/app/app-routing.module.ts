import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./components/box-list/box-list.component'),
  },
  {
    path: 'box/:id',
    loadComponent: () => import('./components/box-detail/box-detail.component').then(c => c.BoxDetailComponent),
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
