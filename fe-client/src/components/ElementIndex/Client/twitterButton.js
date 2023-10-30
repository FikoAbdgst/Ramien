import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TwitterButton = () => {
    return (
        <button className="w-6 h-6 text-gray-400 hover:text-white">
            <Link href={'https://twitter.com/fikoabdgst87'} >
                <FontAwesomeIcon icon={faTwitter} />
            </Link>
        </button>
    )
}

export default TwitterButton