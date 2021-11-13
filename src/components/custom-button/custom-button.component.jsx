import React from 'react'

import './custom-button.styles.scss'

//inverted is for add to cart feature

const CustomButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => (
    <button
        className={`${inverted ? 'inverted' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton
