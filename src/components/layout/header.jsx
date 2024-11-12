"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../../assets/images/logos/logo.png";
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  const { cartData } = useSelector((state) => state?.cartData || [])
  const totalQuantity = cartData?.reduce((accumulator, cartItem) => {
    return accumulator + (cartItem?.quantity || 0);
  }, 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`w-full top-0 z-[1000] sticky bg-white text-black shadow-md `}>
      <div className="container mx-auto flex justify-between gap-10 items-center max-w-[1200px] py-4 px-[20px] md:px-[40px]">
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <Link href={'/'} className="flex items-center">
          <img src={logo.src} alt="Fiztees Logo" className="w-20" />
        </Link>

        <nav className="hidden md:flex gap-3 space-x-4">
          <Link className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/' ? 'underline font-semibold' : ''}`} href="/" prefetch={true}>
            Home
          </Link>
          <Link className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/collection/t-shirt' ? 'underline font-semibold' : ''}`} href="/collection/t-shirt" prefetch={true}>
            T-shirts
          </Link>
          <Link className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/collection/bottom' ? 'underline font-semibold' : ''}`} href='/collection/bottom' prefetch={true}>
            Bottoms
          </Link>
          <Link className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/products' ? 'underline font-semibold' : ''}`} href="/products" prefetch={true}>
            Products
          </Link>
          <Link className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/contact' ? 'underline font-semibold' : ''}`} href="/contact" prefetch={true}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4 text-[24px]">
          <button className=" hover:text-yellow-500 relative">
            <Link href="/cart">
              <HiOutlineShoppingBag />
              <span className="absolute text-black text-[12px] w-[18px] h-[18px] rounded-full bg-white right-[-4px] bottom-[-6px] ">{totalQuantity}</span>
            </Link>
          </button>
        </div>

      </div>

      <div className={`max-w-[1500px] md:hidden transition-all duration-3000 ease-in-out ${isOpen ? 'max-h-[260px]' : 'max-h-[0px] overflow-hidden'}`}>
        <nav className="flex flex-col gap-6 p-[30px] py-4">
          <Link href={"/"} prefetch={true}>
            <p className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/' ? 'underline font-semibold' : ''}`} onClick={() => {
              toggleMenu()
            }}>
              Home
            </p>
          </Link>
          <Link href={"/collection/t-shirt"} prefetch={true}>
            <p className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/collection/t-shirt' ? 'underline font-semibold' : ''}`} onClick={() => {
              toggleMenu()
            }}>
              T-shirt
            </p>
          </Link>
          <Link href={"/collection/shan-e-azwaan"} prefetch={true}>
            <p className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/collection/shan-e-azwaan' ? 'underline font-semibold' : ''}`} onClick={() => {
              toggleMenu()
            }}>
              Shan-e-Azwaan
            </p>
          </Link>
          <Link href={"/products"} prefetch={true}>
            <p className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/products' ? 'underline font-semibold' : ''}`} onClick={() => {
              toggleMenu()
            }}>
              Products
            </p>
          </Link >
          <Link href={"/contact"} prefetch={true}>
            <p className={`text-[18px] cursor-pointer hover:opacity-[0.6] ${pathname === '/contact' ? 'underline font-semibold' : ''}`} onClick={() => {
              toggleMenu()
            }}>
              Contact
            </p>
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Header;
