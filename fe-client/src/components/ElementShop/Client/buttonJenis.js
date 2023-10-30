import React from 'react'
import styles from '../index.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood, faBowlRice, faMugHot } from "@fortawesome/free-solid-svg-icons";

const ButtonJenis = ({ selectedJenis, handleJenisClick }) => {
    return (
        <div className=" inline-block ">
            <div className="flex justify-center items-center my-14">
                <button
                    className={`${styles.btn} ${selectedJenis === "Ramen" ? styles.selected : ""}`}
                    onClick={() => handleJenisClick("Ramen")}
                >
                    <div className={`${styles.sign}`}>
                        <FontAwesomeIcon icon={faBowlFood} className={`${styles.icon}`} />
                    </div>
                    <div className={`${styles.text}`}>
                        Ramen
                    </div>
                </button>
            </div>
            <div className="flex justify-center items-center my-14">
                <button
                    className={`${styles.btn} ${selectedJenis === "Dry" ? styles.selected : ""}`}
                    onClick={() => handleJenisClick("Dry")}
                >
                    <div className={`${styles.sign}`}>
                        <FontAwesomeIcon icon={faBowlRice} className={`${styles.icon}`} />
                    </div>
                    <div className={`${styles.text}`}>
                        Dry
                    </div>
                </button>
            </div>
            <div className="flex justify-center items-center my-14">
                <button
                    className={`${styles.btn} ${selectedJenis === "Drink" ? styles.selected : ""}`}
                    onClick={() => handleJenisClick("Drink")}
                >
                    <div className={`${styles.sign}`}>
                        <FontAwesomeIcon icon={faMugHot} className={`${styles.icon}`} />
                    </div>
                    <div className={`${styles.text}`}>
                        Drink
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ButtonJenis