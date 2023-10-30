import React from 'react'

const ButtonMinus = ({ handleDecreaseCart, cart }) => {
    return (
        <button
            className={` ${cart.quantity === 1 ? "bg-blue-500 cursor-not-allowed" : "bg-blue-700"}  w-6 h-6  text-white outline-none rounded-50% cursor-pointer transition-all hover:bg-blue-500`}
            onClick={() => handleDecreaseCart(cart)}
        >
            -
        </button>
    )
}

export default ButtonMinus