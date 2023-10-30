import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { useCart, useCartDispatch } from '@/context/cartContext';
import { rupiahFormat } from '@/utility/utils';
import 'animate.css/animate.min.css';
import ButtonClear from './Client/buttonClear';
import ButtonClearOne from './Client/buttonClearOne';
import ButtonPlus from './Client/buttonPlus';
import ButtonMinus from './Client/buttonMinus';
import ButtonCheckout from './Client/buttonCheckout';

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const [hide, setHide] = useState(true); // set nilai awal hide menjadi true

    const carts = useCart();
    const dispatch = useCartDispatch();

    useEffect(() => {
        dispatch({ type: 'clear' })

    }, []);


    // hitung total harga setiap kali carts berubah
    useEffect(() => {
        let total = 0;
        const productsInCart = []; // buat array kosong untuk menampung produk
        carts.forEach((cart) => {
            total += cart.price * cart.quantity;
            productsInCart.push(cart); // tambahkan setiap item produk ke array productsInCart
        });
        setTotalPrice(total);
        setProducts(productsInCart); // simpan array produk ke dalam state
        setHide(carts.length === 0);
    }, [carts]);


    const handleAddToCart = (product) => {
        if (product.quantity < product.stock) {
            dispatch({
                type: 'add',
                payload: product,
            });
        } else {
            alert('Maaf stock dari product sudah habis')
        }


    };

    const handleDecreaseCart = (product) => {
        if (product.quantity === 1) {
            // Jika quantity adalah 1, tidak melakukan dispatch
            setProducts((prevProducts) =>
                prevProducts.map((p) => {
                    if (p.id === product.id) {
                        return { ...p };
                    }
                    return p;
                })
            );
        } else {
            dispatch({
                type: 'decrease',
                payload: product,
            });
        }


    };

    const handleClear = () => {
        setProducts((prevProducts) =>
            prevProducts.map((p) => ({ ...p, fadeOut: true }))
        );

        setTimeout(() => {
            dispatch({
                type: 'clear',
            });
        }, 500)

    };

    const handleClearOne = (product) => {
        setProducts((prevProducts) =>
            prevProducts.map((p) => {
                if (p.id === product.id) {
                    return { ...p, fadeOut: true };
                }
                return p;
            })
        );
        setTimeout(() => {
            dispatch({
                type: 'delete',
                payload: product,
            })
        }, 500);
    };

    const handleCheckOut = async (totalPrice, paidAmount, products) => {
        try {
            if (paidAmount >= totalPrice) {
                alert('Transaksi berhasil');
                alert('Untuk history transaksi tersedia di inspect > console')
                console.log(
                    {
                        "totalprice": totalPrice,
                        "paidAmount": paidAmount,
                        "products": products,
                        "Kembalian": paidAmount - totalPrice
                    }
                )
            } else {
                alert('Transaksi Gagal')
                alert('Nominal yang anda berikan kurang untuk membeli product ini, Silahkan isi kembali ...')
            }

        } catch (error) {
            alert('Terjadi kesalahan saat melakukan transaksi.');
            console.error(error);
        }
    };

    return (
        <div className="bg-slate-300 animate__animated animate__fadeInRight w-full h-full text-gray-700 font-semibold p-6 rounded-xl z-10 ">
            <h3 >Cart</h3>
            {products.length === 0 ? (
                <div className="flex justify-center items-center  h-55/10 mt-6 border-y-2 border-gray-400">
                    <h1>There are no Product in the Cart</h1>
                </div>
            ) : (
                <div className="flex flex-col  h-55/10 overflow-auto overflow-x-hidden mt-6 border-y-2 border-gray-400">
                    {products.map((cart, index) => {
                        return (
                            <div key={index}>
                                <div className={`flex flex-row p-3  animate__animated ${cart.fadeOut ? 'animate__fadeOutRight' : 'animate__fadeInLeft'}`}>
                                    <div className="flex items-center">
                                        <ButtonClearOne
                                            handleClearOne={handleClearOne}
                                            cart={cart}
                                        />
                                    </div>
                                    <div className="w-12 relative  mr-2">
                                        <Image className="border-2 border-gray-900" src={cart.url} alt={cart.name} fill />
                                    </div>
                                    <div className="flex flex-col max-w-3/5 gap-2">
                                        <p className="max-w- text-ellipsis overflow-hidden whitespace-nowrap">{cart.name}</p>
                                        <p className="max-w-full text-ellipsis overflow-hidden whitespace-nowrap">{rupiahFormat(cart.price)}</p>
                                    </div>
                                    <div className="flex justify-between items-center flex-row w-1/3 ml-auto gap-2">
                                        <ButtonMinus
                                            handleDecreaseCart={handleDecreaseCart}
                                            cart={cart}
                                        />
                                        <p>{cart.quantity}</p>
                                        <ButtonPlus
                                            handleAddToCart={handleAddToCart}
                                            cart={cart}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            <div>
                <div className="flex pt-4 pl-4">
                    <h3 className="mr-6">Total</h3>
                    <span className="mr-5">:</span> <span> {rupiahFormat(totalPrice)}</span>
                </div>
                {!hide && (
                    <div className="flex  items-center ml-4">
                        <h3 className="mr-4">Bayar</h3>
                        <span className="mr-5">:</span>
                        <span>Rp</span>
                        <div className={styles.form}>
                            <input type="number" className={`${styles.payment}`} onChange={(event) => setPaidAmount(event.target.value)} />
                        </div>
                    </div>
                )}
                {!hide && (
                    <div className='flex gap-2'>
                        <ButtonClear
                            handleClear={handleClear}
                            products={products}
                        />
                        <ButtonCheckout
                            handleCheckOut={handleCheckOut}
                            totalPrice={totalPrice}
                            paidAmount={paidAmount}
                            products={products}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
