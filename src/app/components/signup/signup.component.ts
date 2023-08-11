import { Component } from "@angular/core";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { WindowService } from "src/app/services/window.service";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
  otp: any = "";
  windowRef: any = "";
  otpMsg: string = "";
  constructor(
    private windowService: WindowService,
    private afAuth: AngularFireAuth,
    private user_service: UserService
  ) {}
  auth = getAuth();
  ngOnInit(): void {
    this.loadCaptcha();
  }
  get getControl() {
    return this.registerForm.controls;
  }
  loadCaptcha() {
    this.windowRef = this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier(
      this.auth,
      "recaptcha-verifier",
      {
        size: "normal",
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log(response);
          // ...
        },
        "expired-callback": () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        },
      }
    );
    this.windowRef.recaptchaVerifier.render();
  }
  phoneNumber = "+918218089943";

  registerForm = new FormGroup({
    mobileNo: new FormControl("", [
      Validators.minLength(10),
      Validators.pattern("^[0-9]*$"),
      Validators.required,
    ]),
    dob: new FormControl("", Validators.required),
    placeofbirth: new FormControl("", Validators.required),
    identity: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    belowpoverty: new FormControl(false),
    underprivileged: new FormControl(false),
    document: new FormControl("", Validators.required),
    iAgreeToTnC: new FormControl(false),
  });
  sendOtp() {
    console.log("form values", this.registerForm.value);
    signInWithPhoneNumber(
      this.auth,
      this.phoneNumber,
      this.windowRef.recaptchaVerifier
    )
      .then((confirmationResult: any) => {
        console.log("kuchh aya re", confirmationResult);
        this.windowRef.confirmationResult = confirmationResult;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  verifyOTP() {
    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((res: any) => {
        try {
          console.log("you entered ", this.otp);
         
        } catch (e) {
          console.log(e);
        }
      })
      .catch((error: any) => {
        (this.otpMsg = "incorrect OTP"), error;
        console.log(error);
      });
  }
}
