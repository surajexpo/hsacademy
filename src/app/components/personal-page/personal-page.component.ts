import { Component } from '@angular/core';
import { user } from '@angular/fire/auth';
import {
  getAuth,
} from "firebase/auth";
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent {
  constructor(
    private user_servic:UserService,
  ){}
auth=getAuth();
userData:any=[];
ngOnInit(): void {
  this.getUser();
}
getUser(){
  this.auth.onAuthStateChanged((user:any)=>{
    console.log('user detais',user.uid);
    this.user_servic.getlUser(user.uid).then((res)=>{
      console.log('response ',res);
      res.forEach((doc)=>{
        console.log(doc.data());
        this.userData.push(doc.data());
      })
      
    }).catch(error=>{
      console.log('something went wrong',error);
    });
  })
  console.log('user Data',this.userData);
}
}
