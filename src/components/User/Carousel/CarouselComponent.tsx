
"use client";

import { Carousel } from "flowbite-react";
import {useGetProductsQuery} from "@/redux/service/product";

export default function CarouselComponent() {
    const { data } = useGetProductsQuery({
        page: 1,
        pageSize: 5,
    });
    return (
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-5">
            <Carousel>
                {data?.results.map((product: any) => (
                    <img key={product.id} src={product.image} alt={product.name}/>
                ))}
            </Carousel>
            <Carousel indicators={false}>
                {data?.results.map((product: any) => (
                    <img key={product.id} src={product.image} alt={product.name}/>
                ))}
            </Carousel>
        </div>
    );
}
