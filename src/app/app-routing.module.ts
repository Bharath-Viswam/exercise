import { UsercompComponent } from './usercomp/usercomp.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"aboutus",component:AboutusComponent},
                        {path:"",component:HomeComponent},
                        {path:"users",component:UsercompComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
