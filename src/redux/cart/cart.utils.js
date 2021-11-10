export const addItemToCart = (cartItems,cartItemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem=>cartItem.id===cartItemToAdd.id)


        if(existingCartItem) {
            return cartItems.map(cartItem=>
                cartItem.id===cartItemToAdd.id 
                ? {...cartItem,quantity:cartItem.quantity +1}
                :cartItem
                )
        }

//quantity property gets attached the first time round since this if block wont run when its a new item i think...
        return [...cartItems,{...cartItemToAdd,quantity:1}]
}