import React from 'react'

const ButtonClear = ({ handleClear, products }) => {
    return (
        <button
            className="bg-red-600 text-white w-full flex justify-center items-center rounded-3xl mt-2 p-2 transition-all hover:bg-red-800 hover:text-gray-400"
            onClick={() => handleClear(products)}
        >
            Clear All
        </button>
    )
}

export default ButtonClear