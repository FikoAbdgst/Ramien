import React from 'react'

const LeftSide = () => {
    return (
        <div className=" w-3/5 h-full ">
            <div className=" w-full h-full flex justify-end">
                {/*----------- Label Start -----------*/}
                <div className="w-4/5 h-4/5 flex items-center">
                    <div className="">
                        <div className="flex items-center">
                            <h1 className="text-red-500 max-w-full text-5xl font-semibold">It's Your Ramen Time</h1>
                        </div>
                        <div className="flex-items-center">
                            <p className="text-stone-200 max-w-full text-2xl ">Kami menjual Ramen yang berkualitas sangat tinggi dan menggunakan bahan yang fresh setiap harinya tentunya dengan harga yang terjangkau.</p>
                        </div>
                    </div>
                </div>
                {/*----------- Label Finish -----------*/}

            </div>
        </div>
    )
}

export default LeftSide
