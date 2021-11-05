import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";


initializeFirebase()
const useFirebase = () =>{

     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('')

     const auth = getAuth();

     //registerUser
     const registerUser =(email, password) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
               setUser(result.user)
               setAuthError('')
          })
          .catch((error) => {
          setAuthError(error.message);
          
          })
          .finally(()=> setIsLoading(false));
          
     }

     //Observer user state
     useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                 setUser(user)
               } else {
                 setUser({})
               }
               setIsLoading(false)
             });
          return ()=> unsubscribe;
     },[])

     //LoginUser
     const loginUser = (email , password, location, history) =>{
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               history.replace(destination)
               setUser(result.user)
               setAuthError('')
          })
          .catch((error) => {
          setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));;

     }

     //LogoutUser
     const logOut = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               setUser({})
             }).catch((error) => {
               setAuthError(error.message);
             })
             .finally(()=> setIsLoading(false));;
     }

     return{
          user,
          registerUser,
          loginUser,
          logOut,
          isLoading,
          authError

     }

}

export default useFirebase;