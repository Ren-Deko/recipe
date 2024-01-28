import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { PersonalComponent } from './personal/personal.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SavedComponent } from './saved/saved.component';
import { MyrecipesComponent } from './myrecipes/myrecipes.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'recipe', component: RecipeFormComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: 'profile', component: ProfileComponent,
        children: [
            { path: 'personal', component: PersonalComponent },
            { path: 'newsletter', component: NewsletterComponent },
            { path: 'saved', component: SavedComponent },
            { path: 'myrecipes', component: MyrecipesComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes), HttpClientModule, ReactiveFormsModule, FormsModule],
    exports: [RouterModule, HttpClientModule, ReactiveFormsModule, FormsModule]
})
export class AppRoutingModule { }