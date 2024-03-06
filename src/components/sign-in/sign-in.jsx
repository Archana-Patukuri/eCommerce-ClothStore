import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth,signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumentFromAuth } from "../../utils/firebase/firebase"
const SignIn=()=>{
    useEffect(()=>{
        async function fetchData() {
            const response=await getRedirectResult(auth);
            if(response){
                const useDocRef=await createUserDocumentFromAuth(response.user)
                console.log(useDocRef)
            }   
          }
          fetchData();            
    },[])
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup();
        const useDocRef=await createUserDocumentFromAuth(user)
        console.log(useDocRef)
    }
    /*open google popup in different page
     const logGoogleRedirectUser=async()=>{
        const {user}=await signInWithGoogleRedirect();
        // const useDocRef=await createUserDocumentFromAuth(user)
            console.log(user)
    } */
    return(
        <div>
            <h1>Sign IN Page</h1>        
            <button onClick={logGoogleUser}>sign in with google</button>
            <button onClick={signInWithGoogleRedirect}>sign in with google</button>
        </div>
    )
}
export default SignIn