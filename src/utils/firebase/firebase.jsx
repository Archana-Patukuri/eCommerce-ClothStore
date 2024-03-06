import {initializeApp} from 'firebase/app'
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
/* import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional */
const firebaseConfig = {
    apiKey: "AIzaSyCDcavE3MzBp_sAu8SGxbp8RsDZ6A_jqpY",
    authDomain: "clothstore-db-56af6.firebaseapp.com",
    projectId: "clothstore-db-56af6",
    storageBucket: "clothstore-db-56af6.appspot.com",
    messagingSenderId: "923224744940",
    appId: "1:923224744940:web:4d502edb2d11f9156c96c9",
    measurementId: "G-28XM6PEM66"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const googleprovider=new GoogleAuthProvider();
googleprovider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleprovider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleprovider);
export const db=getFirestore();

export const createUserDocumentFromAuth=async(userAuth)=>{
    const useDocRef=doc(db,'users',userAuth.uid)    
    const userSnapShot=await getDoc(useDocRef)
    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
        try{
            await setDoc(useDocRef,{
                displayName,email,createdAt
            })
        }catch(error){
            console.log('error while creating user ',error.message)
        }
    }
    return useDocRef
}