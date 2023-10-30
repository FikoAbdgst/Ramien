import React from 'react'

const ButtonClearOne = ({ handleClearOne, cart }) => {
    return (
        <button
            className="w-6 h-6 bg-red-700 text-white relative outline-none font-extrabold rounded-lg cursor-pointer transition-all mr-3 hover:bg-red-500"
            onClick={() => handleClearOne(cart)}
        >
            X
        </button>
    )
}

export default ButtonClearOne