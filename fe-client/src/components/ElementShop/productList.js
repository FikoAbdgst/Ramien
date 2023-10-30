

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { rupiahFormat } from '@/utility/utils';
import 'animate.css';
import { useCart, useCartDispatch } from '@/context/cartContext';
import Pagination from './Client/pagination';
import ButtonAdd from './Client/buttonAdd';

const ProductList = ({ selectedJenis, productsData, isJenisChanged }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [isPageChanged, setIsPageChanged] = useState(false);
    const [productsInCart, setProductsInCart] = useState({});


    const dispatch = useCartDispatch();
    const cart = useCart();

    useEffect(() => {
        const productsInCartMap = {};
        cart.forEach(product => {
            productsInCartMap[product.id] = true;
        });
        setProductsInCart(productsInCartMap);
    }, [cart]);

    const handleAddToCart = (product) => {
        dispatch({
            type: 'add',
            payload: product,
        });

        // Tandai produk sebagai telah ditambahkan ke keranjang
        setProductsInCart(prevState => ({
            ...prevState,
            [product.id]: true,
        }));
    };


    const filteredProducts = selectedJenis ? productsData.filter(product => product.jenis === selectedJenis) : productsData;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setIsPageChanged(true)
        setTimeout(() => {
            setCurrentPage(pageNumber);
            setIsPageChanged(false)
        }, 500);
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedJenis]);


    return (
        <React.Fragment>
            <div>
                <div >
                    <h1 className='text-white font-bold text-xl'>{selectedJenis}</h1>
                </div>
                <div className="flex justify-start ml-5">
                    {pageNumbers >= 1 && (
                        <Pagination
                            pageNumbers={pageNumbers}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                    )}
                </div>
                <div className={` animate__animated ${isPageChanged || isJenisChanged ? 'animate__fadeOutRight' : 'animate__fadeInRight'} w-full h-full max-h-9screen flex flex-wrap justify-center items-center gap-3 mt-1`}>
                    {currentItems.map((product, index) => (
                        <div
                            key={index}
                            className={`bg-stone-800 w-48 h-60 rounded-lg flex flex-col shadow-2xl justify-between `}
                        >
                            {product.stock < 1 ? (
                                <>
                                    <div className="relative rounded-lg flex m-auto w-3/4 h-36">
                                        <Image className='rounded-lg' src={product.url} alt={product.name} fill />
                                    </div>
                                    <div className="flex justify-between items-center px-4 pb-3 ">
                                        <div>
                                            <p className="max-w-full text-ellipsis overflow-hidden text-lg font-bold text-red-600">{product.name}</p>
                                            <p className="max-w-full text-ellipsis overflow-hidden font-semibold text-red-500 ml-5">"Stock Habis"</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="relative rounded-lg flex m-auto w-3/4 h-36">
                                        <Image className='rounded-lg' src={product.url} alt={product.name} fill />
                                    </div>
                                    <div className="flex justify-between items-center px-4 pb-3 ">
                                        <div>
                                            <p className="max-w-full text-ellipsis overflow-hidden text-lg font-bold text-red-600">{product.name}</p>
                                            <p className="max-w-full text-ellipsis overflow-hidden font-semibold text-gray-300">{rupiahFormat(product.price)}</p>
                                        </div>
                                        <ButtonAdd
                                            handleAddToCart={handleAddToCart}
                                            product={product}
                                            disabled={productsInCart[product.id]} // Mengatur tombol menjadi nonaktif jika produk sudah ada di keranjang
                                        />
                                    </div>
                                </>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductList;
