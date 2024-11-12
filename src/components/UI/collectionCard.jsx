"use client";

import Link from 'next/link';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const CollectionCard = ({collection}) => {
  return (
    <Link href={collection?.link}>
    <div className='rounded-[20px] cursor-pointer'>
        <div className='rounded-md overflow-hidden bg-[#d5d5d5]'>
        <img 
    className="hover:scale-105 hover:drop-shadow-[0px_0px_4px_#a3a3a3] aspect-[1/1] transition-all duration-500" 
    src={collection?.image} 
    alt={collection?.alt} 
/>

        </div>
        <div className='flex justify-center items-center gap-4 pt-2'>
            <h1 className='text-[20px]'>{collection?.title}</h1>
            <FaArrowRightLong/>
        </div>
    </div>
    </Link>
  )
}

export default CollectionCard;