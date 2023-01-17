import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'list', loadComponent: ()=> import('./box-list/box-list.component')},
  {path:'box/:id', loadComponent :() => import('./box-detail/box-detail.component')},
  {path: '', redirectTo:'/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
