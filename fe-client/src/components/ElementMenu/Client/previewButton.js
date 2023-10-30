import React from 'react'
import Image from 'next/image';
import 'animate.css'



const PreviewButton = ({ slide, handlePreview, isJenis2Changed }) => {
    return (
        <div className='flex justify-center items-center gap-5'>
            {slide.map((product, productIndex) => (
                <button
                    key={productIndex}
                    className={`animate__animated ${isJenis2Changed ? 'animate__fadeOutDown' : 'animate__fadeInUp'} bg-stone-800 text-red-600  w-44 h-52 rounded-xl flex flex-col shadow-2xl justify-between hover:bg-amber-700 hover:text-gray-300 `}
                    onClick={() => handlePreview(product.name, product.url, product.desc, product.price, product.stock)}
                >
                    <div className="relative rounded-lg flex w-32 m-auto h-32">
                        <Image className='rounded-lg' src={product.url} alt={product.name} fill />
                    </div>
                    <div className=" w-full flex justify-center items-center mb-5">
                        <p className="max-w-full text-ellipsis overflow-hidden text-xl font-bold ">{product.name}</p>
                    </div>
                </button>
            ))}
        </div>
    )
}

export default PreviewButton