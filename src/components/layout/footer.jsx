"use client";
import Link from 'next/link';
import Logo from '../../assets/images/logos/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#21222A] py-10 px-10 text-white w-full max-w-[1500px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm px-4 md:px-0">
        <div>
          <Link href={'/'} className='text-white font-[auto] text-[35px] flex mb-[30px] decoration-transparent '>
          Fiztees
          </Link>
          <p>Call Us at:</p>
          <p className="font-bold">+92 313 2148056</p>
          <p className="mt-4">For Business Queries:</p>
          <p className="font-bold">info.fiztees@gmail.com</p>
          <div className="flex mt-4 space-x-4">
            <a className='!text-white decoration-transparent' href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a className='!text-white decoration-transparent' href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4">ORDER INFO</h4>
          <ul>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">RETURN POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">PRIVACY POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">TERMS OF SERVICE</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">SHIPPING POLICY</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">ABOUT US</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/">FAQs</a></li>
            <li><a className='!text-white decoration-transparent' href="/contact">CONTACT US</a></li>
          </ul>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-bold mb-4">SHOP</h4>
          <ul>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/collection/t-shirt">t-shirt</a></li>
            <li className="mb-2 hover:opacity-[0.7]"><a className='!text-white decoration-transparent' href="/collection/bottom">Bottom</a></li>
            <li><a className='!text-white decoration-transparent' href="/products">ALL PRODUCTS</a></li>
          </ul>
        </div>

        {/* Email Subscription */}
        <div>
          <h4 className="font-bold mb-4">Subscribe to our emails</h4>
          <div className="flex items-center border border-white rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent px-4 py-2 text-sm outline-none text-white w-full"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
        </div>
      </div>

      {/* Copyright and Privacy Policy */}
      <div className="mt-10 text-center text-xs text-gray-400 border-t border-gray-600 pt-4">
        <p>© 2024, Fiztees · <a className='!text-white decoration-transparent' href="#" >Privacy policy</a></p>
      </div>
    </div>

  );
};

export default Footer;
