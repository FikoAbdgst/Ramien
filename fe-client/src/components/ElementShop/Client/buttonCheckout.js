import React from 'react'

const ButtonCheckout = (handleCheckOut, totalPrice, paidAmount, products) => {
    return (
        <button
            className="bg-blue-600 text-white w-full flex justify-center items-center rounded-3xl mt-2 p-2 transition-all hover:bg-blue-800 hover:text-gray-400"
            onClick={() => handleCheckOut(totalPrice, paidAmount, products)}
        >
            Check Out
        </button>
    )
}

export default ButtonCheckout