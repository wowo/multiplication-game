import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiplicationGameComponent } from './multiplication-game/multiplication-game.component';

const routes: Routes = [
  { path: '', component: MultiplicationGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
