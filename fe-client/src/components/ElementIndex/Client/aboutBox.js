import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from '../index.module.css'
import 'animate.css';

const AboutBox = ({hideAbout, handleAnimationEnd, hideLeft2, handleCloseAbout}) => {
    return (
        <div className={`animate__animated ${hideAbout ? 'animate__fadeOutRight' : 'animate__fadeInRight'} absolute w-3/5  flex justify-end`} onAnimationEnd={handleAnimationEnd}>
            <button className={`animate__animated ${hideLeft2 ? 'animate__fadeOutRight' : 'animate__fadeInRight'} ${styles.btn_about2} flex justify-center items-center text-xl rounded text-gray-400 hover:text-white`} onClick={handleCloseAbout}>
                <div className="w-6">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
            </button>
            <div className="w-9/10 flex justify-end ">
                <div className="w-full pl-5 pr-2 py-3 rounded-l-md bg-stone-600 border-4 border-stone-500 shadow-2xl">
                    <p className="text-slate-300 font-semibold">Ramen (拉麺, ラーメン) adalah masakan mi kuah Jepang yang berasal dari Tiongkok. Orang Jepang juga menyebut ramen sebagai chuka soba (soba dari Tiongkok) karena soba atau o-soba dalam bahasa Jepang sering juga berarti mi.</p>
                </div>
            </div>
        </div>
  )
}

export default AboutBox