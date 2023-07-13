import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'',component:TopheadlineComponent}// top headlines & Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
