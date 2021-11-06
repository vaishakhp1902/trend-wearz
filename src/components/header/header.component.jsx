import React from "react";
import { Link } from "react-router-dom";
import './header.styles.scss'
import {ReactComponent as Logosvg} from "../../assets/crown.svg"
import { auth } from "../../firebase/firebase.util";


const Header = ({currentUser}) =>(

    <div className='header'>
    <Link className='logo-container' to='/'>
    <Logosvg className='logo'></Logosvg>
    
    </Link>

    <div className='options'>
    <Link className='option' to='/shop'>
    SHOP
    
    </Link>

    <Link className='option' to='/shop'>
    CONTACT
    
    </Link>

    {
        currentUser?
        <div className='option' onClick={()=> auth.signOut()}> SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
    }
    
    </div>

    
    </div>
)

export default Header