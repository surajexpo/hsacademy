import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SignupComponent } from './components/signup/signup.component';

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
    path:'course-detail',
    component:CourseDetailsComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
