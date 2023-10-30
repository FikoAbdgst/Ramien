import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from '../index.module.css'
import 'animate.css';


const AboutButton = ({hideLeft, handleAbout}) => {
    return (
        <button className={`animate__animated ${hideLeft ? 'animate__fadeOutRight' : 'animate__fadeInRight'} ${styles.btn_about} h-14 text-xl rounded  text-gray-400 hover:text-white `} onClick={handleAbout}>
            <div className="flex items-center ">
                <div className="w-6 ml-5 mr-5 ">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="font-semibold">
                    About
                </div>
            </div>
        </button>
    )
}

export default AboutButton