//import CartItem from "../../components/cart-item/cart-item.component"

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    )

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    //quantity property gets attached the first time round since this if block wont run when its a new item i think...
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (CartItems, cartItemToRemove) => {
    const existingCartItem = CartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return CartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        )
    }

    return CartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )
}
