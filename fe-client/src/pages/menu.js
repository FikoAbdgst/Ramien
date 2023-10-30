import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout/layout";
import api from "../../api";
import 'animate.css/animate.min.css';
import LeftMenu from "@/components/ElementMenu/leftMenu";
import RightMenu from "@/components/ElementMenu/rightMenu";

export default function Shopping() {
    const [selectedJenis, setSelectedJenis] = useState(""); // Tambahkan state untuk jenis yang dipilih
    const [products, setProducts] = useState([]); // Tambahkan state untuk data produk
    const [isJenisChanged, setIsJenisChanged] = useState(false); // Tambahkan state untuk data produk
    const [isJenis2Changed, setIsJenis2Changed] = useState(false); // Tambahkan state untuk data produk


    const handleJenisClick = async (jenis) => {
        try {
            if (jenis === products[0]?.jenis) {
                // Jika data yang akan ditampilkan dalam preview sama dengan data yang ditampilkan saat ini,
                // tidak perlu menjalankan animasi
                return;
            }
            const response = await api.get(`/products?jenis=${jenis}`); // Panggil endpoint API dengan jenis yang dipilih
            setSelectedJenis(jenis); // Set jenis yang dipilih ke state
            setIsJenis2Changed(true)
            setTimeout(() => {
                setIsJenisChanged(true)
                setProducts(response.data); // Set data produk ke state
                setIsJenis2Changed(false)
            }, 500);

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (selectedJenis === "") {
            handleJenisClick("Ramen"); // Jika jenis belum dipilih, secara otomatis panggil jenis "Ramen"
        }
    }, []);

    console.log(isJenisChanged)

    return (
        <Layout>

            <div className='w-full h-screen flex'>
                <LeftMenu
                    selectedJenis={selectedJenis}
                    handleJenisClick={handleJenisClick}
                />
                <RightMenu
                    selectedJenis={selectedJenis}
                    products={products}
                    isJenisChanged={isJenisChanged}
                    setIsJenisChanged={setIsJenisChanged}
                    isJenis2Changed={isJenis2Changed}
                />
            </div>
        </Layout>
    )
}
