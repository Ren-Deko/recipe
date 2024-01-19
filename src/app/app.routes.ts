import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'; 
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from 'c:/Users/renier/Desktop/groepsopdracht2/src/app/recipe-form/recipe-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'recipe', component: RecipeFormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }