import React from 'react'

const ButtonPlus = ({ handleAddToCart, cart }) => {
    return (
        <button
            className={` ${cart.quantity === cart.stock ? "bg-blue-500 cursor-not-allowed" : "bg-blue-700"} w-6 h-6 bg-blue-700 text-white outline-none rounded-50% cursor-pointer transition-all hover:bg-blue-500`}
            onClick={() => handleAddToCart(cart)}
        >
            +
        </button>
    )
}

export default ButtonPlus