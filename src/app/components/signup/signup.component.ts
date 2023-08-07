import { Component } from "@angular/core";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { WindowService } from "src/app/services/window.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  windowRef: any = "";
  constructor(
    private windowService: WindowService,
    public afAuth: AngularFireAuth
  ) {
    this.windowRef = this.windowService.windowRef;
  }
  auth = getAuth();
  ngOnInit(): void {
    try {
      this.windowRef.recaptchaVerifier = new RecaptchaVerifier(
        this.auth,
        "sign-in-button",
        {
         
          size: "visible",
          callback: (response: any) => {
            console.log('captcha load ho gya re',response);
          },
        }
      );
      this.windowRef.recaptchaVerifier.render();
    } catch (e) {
      console.log(
        "There was a problem in initializing the recapctha verifier: " + e
      );
    }
  }
  phoneNumber = "+918218089943";
  sendOtp() {
    console.log('chala re');
    firebase.auth().signInWithPhoneNumber(
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
      });
  }
}
