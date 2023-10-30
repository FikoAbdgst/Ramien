import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ButtonAdd = ({ handleAddToCart, product, disabled }) => {
    const addToCart = () => {
        if (!disabled) {
            handleAddToCart(product);
        }
    };
    return (
        <button
            className={`${disabled ? 'bg-transparent' : 'bg-blue-600 hover:bg-blue-500'} text-white rounded outline-none border-none w-8 h-8 p-0 text-lg font-bold cursor-pointer transition-all `}
            onClick={() => handleAddToCart(product)}
            disabled={disabled}
        >
            {disabled ? <FontAwesomeIcon icon={faCheck} className='text-green-700 w-6 h-6' /> : '+'}
        </button>

    )
}

export default ButtonAdd


