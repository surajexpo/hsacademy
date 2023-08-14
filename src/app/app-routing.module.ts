import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
const routes: Routes = [
  {
    path:'',
    component:LandingComponent
  },
  {
    path:'course-detail',
    component:CourseDetailsComponent
  },
  {
    path:'personal-page',
    component:PersonalPageComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
