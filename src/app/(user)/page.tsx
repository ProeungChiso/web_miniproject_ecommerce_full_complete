'use client'

import CarouselComponent from "@/components/User/Carousel/CarouselComponent";
import ProductCardComponent from "@/components/User/Cards/ProductCardComponent";
import {useGetProductsQuery} from "@/redux/service/product";
import React, {useState} from "react";
import {Pagination} from "flowbite-react";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);

    const {data} = useGetProductsQuery({
        page: currentPage,
        pageSize: 12,
    });
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <main>
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <CarouselComponent/>
                <h1 className="text-gray-800 text-2xl text-center font-bold my-10">Products</h1>
                <section id="productsList">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center gap-4">
                        {data?.results.map((product: any) => (
                            <ProductCardComponent
                                key={product.id}
                                title={product.name}
                                image={
                                    product.image === ""
                                        ? "https://agrimart.in/uploads/vendor_banner_image/default.jpg"
                                        : product.image
                                }
                                price={product.price}
                                id={product.id}
                            />
                        ))}
                    </div>
                    <Pagination
                        className='mt-4 text-sm text-center'
                        layout="pagination"
                        currentPage={currentPage}
                        totalPages={1000}
                        onPageChange={handlePageChange}
                        previousLabel="Go back"
                        nextLabel="Go forward"
                        showIcons
                    />
                </section>
            </div>
        </main>
    );
}
