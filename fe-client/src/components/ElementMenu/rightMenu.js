import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css';
import './index.module.css'
import { rupiahFormat } from '@/utility/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import PreviewButton from './Client/previewButton';

const RightMenu = ({ selectedJenis, products, isJenisChanged, setIsJenisChanged, isJenis2Changed }) => {
    const [productsData, setProductsData] = useState([]);
    const [preview, setPreview] = useState([]);
    const [isPreviewChanged, setIsPreviewChanged] = useState(false);
    const productsPerSlide = 3; // Jumlah produk per slide

    useEffect(() => {
        setProductsData(products);
    }, [products]);


    const CustomPrevArrow = (props) => (
        <div onClick={props.onClick} className="custom-arrow custom-prev-arrow">
            <FontAwesomeIcon icon={faCircleChevronLeft} />
        </div>
    );

    // Fungsi komponen untuk tombol panah kanan
    const CustomNextArrow = (props) => (
        <div onClick={props.onClick} className="custom-arrow custom-next-arrow">
            < FontAwesomeIcon icon={faCircleChevronRight} />
        </div>
    );

    const settings = {
        dots: true,
        dotsClass: 'customDots',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />, // Tombol panah kiri
        nextArrow: <CustomNextArrow />, // Tombol panah kanan
    };




    const handlePreview = (name, url, desc, price, stock) => {
        if (name === preview[0]?.name) {
            // Jika data yang akan ditampilkan dalam preview sama dengan data yang ditampilkan saat ini,
            // tidak perlu menjalankan animasi
            return;
        }
        setIsPreviewChanged(true); // Memicu animasi
        setTimeout(() => {
            setIsJenisChanged(false)
            setPreview([{ name, url, desc, price, stock }]);
            setIsPreviewChanged(false); // Mengembalikan animasi
        }, 500); // Ubah sesuai dengan durasi animasi Anda

    };

    const slideProducts = () => {
        const slides = [];
        for (let i = 0; i < productsData.length; i += productsPerSlide) {
            slides.push(productsData.slice(i, i + productsPerSlide));
        }
        return slides;
    };

    return (
        <div className="w-4/5 h-4/5 z-10">
            <div className="w-full h-full">
                {selectedJenis && (
                    <>
                        <div className='w-full h-3/5 flex justify-center items-center'>
                            {isJenisChanged ? (
                                <div className={` animate__animated ${isPreviewChanged ? 'animate__fadeOutRight' : 'animate__fadeInRight'} w-3/4 h-9/10 flex rounded-bl-3xl rounded-tr-3xl bg-stone-800 bg-opacity-75`} >
                                    <div className='w-full h-full flex justify-center items-center'>
                                        <p className='text-4xl font-bold text-red-600'>All Menu Ramien</p>
                                    </div>
                                </div>
                            ) : (
                                preview.map((product, index) => (
                                    <div className={` animate__animated ${isPreviewChanged ? 'animate__fadeOutRight' : 'animate__fadeInRight'} w-3/4 h-9/10 flex rounded-bl-3xl rounded-tr-3xl bg-stone-800 bg-opacity-75`} key={index}>
                                        <div className="relative w-1/3 h-full flex justify-center items-center">
                                            <Image className='rounded-lg' src={product.url} alt={product.name} width={200} height={200} />
                                        </div>
                                        <div className="w-3/5 pl-5 pr-2 py-5 ">
                                            <div>
                                                <p className="max-w-full text-ellipsis overflow-hidden text-5xl font-bold text-red-600">{product.name}</p>
                                            </div>
                                            <div className='flex'>
                                                {product.stock < 1 ? (
                                                    <div className='bg-red-600 text-white text-center w-20 px-2 mt-4 '>
                                                        <p>Habis</p>
                                                    </div>
                                                ) : (
                                                    <div className='bg-green-600 text-white text-center w-20 px-2 mt-4 '>
                                                        <p>Tersedia</p>
                                                    </div>
                                                )}
                                                <p className="max-w-full text-ellipsis overflow-hidden font-semibold text-gray-300 px-3 mt-4 mx-3  border-l-2 border-l-gray-300">{rupiahFormat(product.price)}</p>
                                            </div>
                                            <div className='mt-5'>
                                                <p>{product.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className='w-full h-2/5 flex justify-center items-center'>
                            <div className='w-3/5'>
                                <Slider {...settings}>
                                    {slideProducts().map((slide, slideIndex) => (
                                        <div key={slideIndex}>
                                            <PreviewButton
                                                slide={slide}
                                                handlePreview={handlePreview}
                                                isJenis2Changed={isJenis2Changed}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div >
    )
}

export default RightMenu;
