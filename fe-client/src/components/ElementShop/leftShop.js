import React from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faBowlRice, faMugHot } from "@fortawesome/free-solid-svg-icons";
import ButtonJenis from './Client/buttonJenis';

const LeftShop = ({ selectedJenis, handleJenisClick }) => {
    return (
        <div className='w-1/5 h-full z-50 '>
            <div className="bg-transparent w-4/5 h-4/5 flex justify-center items-center mt-10 mx-auto ">
                <div className="w-2 h-1/2 bg-white bg-opacity-40 rounded-lg"></div>
                <div className="bg-transparent w-10 h-3/5 rounded-md absolute flex justify-center items-center  ">
                    <ButtonJenis
                        selectedJenis={selectedJenis}
                        handleJenisClick={handleJenisClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default LeftShop