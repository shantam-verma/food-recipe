import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { ACCESS_KEY } from "@/utils/constants";

export const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};

export const signUpAuth = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const loginAuth = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  signOut(auth)
    .then(() => {
      Cookies.remove(ACCESS_KEY);
    })
    .catch((error) => {
      console.log("Logout Failed!", error);
    });
};
