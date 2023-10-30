import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const FacebookButton = () => {
    return (
        <button className="w-4 h-8 text-gray-400 hover:text-white">
            <Link href={"https://www.facebook.com/profile.php?id=61552191721421"} >
                <FontAwesomeIcon icon={faFacebookF} />
            </Link>
        </button>
    )
}

export default FacebookButton