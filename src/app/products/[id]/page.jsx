"use client";

import React from "react";
import ProductDetailCard from "@/components/UI/productDetailCard";
import { useSelector } from "react-redux";
import Loader from "@/components/UI/loader";
import ProductsSection from "@/components/sections/productsSection";

const ProductDetail = ({ params }) => {
  const { products, loading, error } = useSelector((state) => state.productData);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const product = products?.find(item => item?._id === params?.id);
  

  return (
    <>
      <ProductDetailCard product={product} />
      <ProductsSection collection={product.collectionName} name={'You may also like,'} maxLength={4} />
    </>
  );
};

export default ProductDetail;
