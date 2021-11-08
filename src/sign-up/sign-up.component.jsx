import React from "react";
import FormInput from "../components/form-input/form-input.component";
import CustomButton from "../components/custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../firebase/firebase.util";

import './sign-up.styles.scss'

class Signup extends React.Component {
    constructor(){
        super()

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }



    handleSubmit = async event =>{
        event.preventDefault()
        
        const {displayName,email,password,confirmPassword} = this.state
        console.log("in form:"+displayName)

        if (password!==confirmPassword){
            alert("passwords dont match")
            return
        }
        try {
            const {user} = auth.createUserWithEmailAndPassword(email,password)
            console.log("befoee userprofile doc"+displayName)
            await createUserProfileDocument(user,{displayName})
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
            
        } catch (error) {
            console.log(error)
            
        }
    }



    handleChange = event =>{
        const {name,value} = event.target
        this.setState({[name]:value})

    }

    render(){

        const {displayName,email,password,confirmPassword} = this.state
        return(
            <div className='sign-up'>
            <h2 className='title'>DO NOT HAVE AN ACCOUNT?</h2>
            <span>SIGN UP WITH EMAIL AND PASSWORD</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
            >


            </FormInput>


            <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
            >


            </FormInput>



            <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
            >


            </FormInput>



            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
            >


            </FormInput>

            <CustomButton type='submit'>SIGN UP</CustomButton>
            
            
            
            </form>



            </div>
        )
    }
}

export default Signup