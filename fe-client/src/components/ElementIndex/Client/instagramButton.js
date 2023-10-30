import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const InstagramButton = () => {
    return (
        <button className="w-6 h-6 text-gray-400 hover:text-white">
            <Link href={'https://www.instagram.com/fikoabdgst'} >
                <FontAwesomeIcon icon={faInstagram} />
            </Link>
        </button>
    )
}

export default InstagramButton