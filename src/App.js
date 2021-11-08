import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInandSignupPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'


import { setCurrentUser } from './redux/user/user.actions'

import { auth, createUserProfileDocument } from './firebase/firebase.util'

class App extends React.Component {


    unsunscribeFromAuth = null
    componentDidMount() {

      const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
    
            userRef.onSnapshot(snapShot => {
              
                setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data()
                })
              });
    
              console.log(this.state);
            
          }
    
          setCurrentUser(userAuth);
        });
      }
    
      componentWillUnmount() {
        this.unsubscribeFromAuth();
      }

   
    

    render() {
        return (
            <div>
            <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop/" component={ShopPage} />
                    <Route path="/signin" component={SignInandSignupPage} />
                </Switch>
            </div>
        )
    }
   
}

const dispatchToProps = dispatch => ({
  setCurrentUser: user =>dispatch(setCurrentUser(user))
})

export default connect(null,dispatchToProps)(App)
