import React from "react";
import './sign-in-and-sign-up.styles.scss'
import SignIn from "../../components/sign-in/sign-in.component";
import Signup from "../../sign-up/sign-up.component";


const SignInandSignupPage = () => (
   <div className='sign-in-and-sign-up'> 
   <SignIn />
   <Signup/>
   
   </div> 
)

export default SignInandSignupPage
