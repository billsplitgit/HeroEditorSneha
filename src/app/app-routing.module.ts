import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from "./hero-list/hero-list.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'AppComponent'},
  {path: 'list', component: HeroListComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
