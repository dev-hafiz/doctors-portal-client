import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , updateProfile, getIdToken  } from "firebase/auth";


initializeFirebase()
const useFirebase = () =>{

     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('')
     const [admin, setAdmin] = useState(false)
     const [token, setToken] = useState('')

     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider();

     //registerUser
     const registerUser =(email, password, name, history) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
              setAuthError('')
               const newUser = {email, displayName:name}
               setUser(newUser)
               //Save User To Database
               saveUser(email, name, 'POST')
               //Send name to firebase 
               updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    
                  }).catch((error) => {
                    
                  });
              history.replace('/');
          })
          .catch((error) => {
          setAuthError(error.message);
          
          })
          .finally(()=> setIsLoading(false));
          
     }

     //Google SignIn
     const googleUserSignIn = (location, history) =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
               
               const user = result.user;
               saveUser(user.email, user.displayName, 'PUT')
               const destination = location?.state?.from || '/';
               history.replace(destination)
               setAuthError('');
          }).catch((error) => {
               setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
     }

     //Observer user state
     useEffect( ()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                 setUser(user)
                 getIdToken(user)
                 .then(idToken =>{
                    setToken(idToken)
                 })
                 
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

     //Save User To Database
     const saveUser = (email, displayName, method) =>{
          const user ={email, displayName}
          fetch('https://aqueous-shore-28644.herokuapp.com/users',{
               method: method,
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data => console.log(data))

     }

     //admin check dataload with email
     useEffect( ()=>{
          fetch(`https://aqueous-shore-28644.herokuapp.com/users/${user.email}`)
          .then(res => res.json())
          .then(data => setAdmin(data.admin))
     },[user.email])

     return{
          user,
          registerUser,
          loginUser,
          logOut,
          isLoading,
          authError,
          googleUserSignIn,
          admin,
          token

     }

}

export default useFirebase;