import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout/layout";
import api from "../../api";

import LeftShop from "@/components/ElementShop/leftShop";
import RightShop from "@/components/ElementShop/rightShop";

export default function Shopping() {
    const [selectedJenis, setSelectedJenis] = useState(""); // Tambahkan state untuk jenis yang dipilih
    const [products, setProducts] = useState([]); // Tambahkan state untuk data produk
    const [isJenisChanged, setIsJenisChanged] = useState(false); // Tambahkan state untuk data produk


    const handleJenisClick = async (jenis) => {
        try {
            const response = await api.get(`/products?jenis=${jenis}`); // Panggil endpoint API dengan jenis yang dipilih
            setSelectedJenis(jenis); // Set jenis yang dipilih ke state
            setIsJenisChanged(true)
            setTimeout(() => {
                setProducts(response.data); // Set data produk ke state
                setIsJenisChanged(false)
            }, 200);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (selectedJenis === "") {
            handleJenisClick("Ramen"); // Jika jenis belum dipilih, secara otomatis panggil jenis "Ramen"
        }
    }, []);


    return (
        <Layout>

            <div className='flex w-full h-screen '>
                <LeftShop
                    selectedJenis={selectedJenis}
                    handleJenisClick={handleJenisClick}
                />
                <RightShop
                    selectedJenis={selectedJenis}
                    products={products}
                    isJenisChanged={isJenisChanged}
                />
            </div>
        </Layout>
    )
}
