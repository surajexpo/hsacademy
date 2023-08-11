import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { WindowService } from './services/window.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CourseDetailsComponent,
    LoginComponent,
    SignupComponent,
    PersonalPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
