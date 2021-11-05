import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebae.config";

const initializeFirebase = () =>{
     initializeApp(firebaseConfig);
}

export default initializeFirebase;