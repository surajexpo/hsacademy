import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import "firebase/firestore";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { addDoc } from "firebase/firestore";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private fs: Firestore
  ) {}
  addUser(user: any) {
    let userCollection = collection(this.fs, "user");
    return addDoc(userCollection, user);
  }
}
