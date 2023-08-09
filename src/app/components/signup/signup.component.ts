import { Component } from "@angular/core";
import { environment } from "src/environments/environment";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { WindowService } from "src/app/services/window.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})

export class SignupComponent {
  
  windowRef: any = "";
  constructor(
    private windowService: WindowService,
    private afAuth: AngularFireAuth
  ) {}
  auth = getAuth();
  ngOnInit(): void {
    this.windowRef = this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier(this.auth,'recaptcha-verifier', {
      'size': 'normal',
      'callback': (response:any) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response)
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    });
    this.windowRef.recaptchaVerifier.render()
    
  }
  phoneNumber = "+918218089943";
  sendOtp() {
    console.log('chala re');
    signInWithPhoneNumber(this.auth,
      this.phoneNumber,
      this.windowRef.recaptchaVerifier
    )
      .then((confirmationResult: any) => {
        console.log('kuchh aya re',confirmationResult);
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        this.windowRef.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error: any) => {
        // Error; SMS not sent
        // ...
        console.log(error)
      });
}
}