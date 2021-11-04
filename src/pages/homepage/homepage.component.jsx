import React from 'react'
import './homepage.styles.scss'
import Directory from '../../components/directory/directory.component'

// link which user clisk( hats/women) etc.. is passed to homepage component, so it is being passed to its parent components
const HomePage = () => (
    <div className="homepage">
        <Directory/>
    </div>
)

export default HomePage
