import React from 'react';
import { useRouter } from 'next/router';
import { MENU_LIST } from './constants';
import Head from "next/head";
import styles from './index.module.css';

const Layout = ({ children }) => {
    const router = useRouter();

    // Mendapatkan indeks halaman saat ini berdasarkan path
    const currentPageIndex = MENU_LIST.findIndex(
        (menu) => menu.path === router.pathname
    );

    // Mengambil latar belakang berdasarkan indeks halaman
    const getBackground = (pageIndex) => {
        const backgrounds = [
            'url("/black.jpg")', // Ganti dengan nilai latar belakang untuk halaman 1
            'url("/black.jpg")', // Ganti dengan nilai latar belakang untuk halaman 2
            'url("/black.jpg")', // Ganti dengan nilai latar belakang untuk halaman 3
        ];
        return backgrounds[pageIndex];
    };


    const handleChangePage = (path) => {
        router.push(path);
    };

    return (
        <React.Fragment>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;700&display=swap" rel="stylesheet" />
            </Head>
            <section className='bg-cover h-screen overflow-hidden'
                style={{
                    backgroundImage: getBackground(currentPageIndex),

                }}
            >

                <nav className=' bg-transparent h-20 font-bold flex justify-between items-end '>
                    <div className='flex h-full text-gray-100 text-3xl ml-20 py-5 gap-10 cursor-pointer'>
                        <h1><a href='/'>Ramien</a></h1>
                    </div>
                    <div className='flex justify-center items-center w-1/3 h-full py-5 cursor-pointer text-gray-400 '>
                        <ul className='flex gap-16 ' >
                            {MENU_LIST.map((menu, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`${styles.rightnav} ${router.pathname === menu.path ? styles.active : ''
                                            } text-gray-400 hover:text-white`}
                                        onClick={() => handleChangePage(menu.path)}
                                    >
                                        {menu.name}
                                    </li>
                                );
                            })}
                        </ul>

                    </div>
                </nav>
                {children}

            </section>
        </React.Fragment >
    );
};

export default Layout;
