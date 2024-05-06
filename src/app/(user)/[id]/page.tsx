'use client'

import ProductDetailCardComponent from "@/components/User/Cards/ProductDetailCardComponent";
import {useGetProductByIdQuery} from "@/redux/service/product";

export type ParamProps = {
    params: {
        id: number;
    }
}

function ProductDetailPage({params}: ParamProps) {
    const id = params.id;
    const {data} = useGetProductByIdQuery(id);
    // Check if data is not yet available
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <main>
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <h1 className="text-gray-800 text-2xl text-center font-bold my-10">Product Detail</h1>
                <ProductDetailCardComponent
                    id={data.id}
                    name={data.name}
                    price={data.price}
                    category={data.category}
                    description={data.desc}
                    image={data.image}
                />
            </div>
        </main>

    )
}

export default ProductDetailPage;