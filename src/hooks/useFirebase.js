import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";


initializeFirebase()
const useFirebase = () =>{

     const [user, setUser] = useState({})

     const auth = getAuth();

     //registerUser
     const registerUser =(email, password) =>{
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          });
     }

     //Observer user state
     useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                 setUser(user)
               } else {
                 setUser({})
               }
             });
          return ()=> unsubscribe;
     },[])

     //LoginUser
     const loginUser = (email , password) =>{
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          })
          .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          });

     }

     //LogoutUser
     const logOut = () =>{
          signOut(auth).then(() => {
               setUser({})
             }).catch((error) => {
              
             });
     }

     return{
          user,
          registerUser,
          loginUser,
          logOut

     }

}

export default useFirebase;