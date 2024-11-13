"use client";
import { useSelector } from 'react-redux';
import ProductCard from '../UI/productCard';
import Link from 'next/link';
import Loader from '../UI/loader';

const ProductsSection = ({ maxLength, collection, name }) => {
    const { products, loading, error } = useSelector((state) => state.productData);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <p>{error}</p>
        );
    }

    return (
        <div className='max-w-[1500px]'>
            <h1 className='m-6 text-[30px] font-semibold text-center'>{name}</h1>
            <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[750px]:grid-cols-2 max-[470px]:grid-cols-1 gap-2 m-6">
                {products
                    ?.filter(product => product?.collectionName?.toLowerCase() === collection.toLowerCase() || collection === "all")
                    .slice(0, maxLength)
                    .map((product) => (
                        <Link
                            className="cursor-pointer text-black decoration-transparent"
                            key={product._id}
                            href={`/products/${product._id}`}
                        >
                            <ProductCard product={product} />
                        </Link>
                    ))
                }

            </div>
        </div>
    );
};

export default ProductsSection;
