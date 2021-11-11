import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { ReactComponent as Logosvg } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.util'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { createStructuredSelector } from 'reselect'

const Header = ({ currentUser,hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logosvg className="logo"></Logosvg>
        </Link>

        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>

            <Link className="option" to="/shop">
                CONTACT
            </Link>

            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    {' '}
                    SIGN OUT
                </div>
            ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
               
            )}

            <CartIcon />
            
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header)
