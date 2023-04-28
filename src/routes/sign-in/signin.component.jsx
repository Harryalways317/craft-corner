import { signInWithGooglePopup,createDocFromUserAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logWithGoogle = async () => {

        const response = await signInWithGooglePopup();
        console.log(response)
       await createDocFromUserAuth(response)
     
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logWithGoogle}>Sign in with google popup</button>
        </div>
    )
}

export default SignIn