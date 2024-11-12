"use client";
import ProductsSection from '@/components/sections/productsSection';
import Loader from '@/components/UI/loader';
import React from 'react'
import { useSelector } from 'react-redux';

const Collection = ({ params }) => {
  const { loading, error } = useSelector((state) => state.productData);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
  
  return (
    <ProductsSection collection={params?.collection} maxLength={Infinity} name={capitalizeFirstLetter(params?.collection)} />
  )
}

export default Collection
