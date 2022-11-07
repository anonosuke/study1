import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Parent1Component } from './components/parent1/parent1.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'parent1', component: Parent1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
