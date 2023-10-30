import React from 'react'
import ProductList from "@/components/ElementShop/productList";
import Cart from "@/components/ElementShop/cart";

const RightShop = ({ selectedJenis, products, isJenisChanged }) => {
    return (
        <div className="w-4/5 h-4/5 z-10">
            <div className=" w-full h-full flex relative justify-between ">
                <div className="w-3/5">
                    {selectedJenis && (
                        <ProductList
                            selectedJenis={selectedJenis}
                            productsData={products}
                            isJenisChanged={isJenisChanged}
                        />
                    )}
                </div>
                <div className="w-2/5 mt-8 mr-5">
                    <Cart />
                </div>
            </div>
        </div>
    )
}

export default RightShop