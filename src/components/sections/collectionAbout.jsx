"use client";

import Link from "next/link";
import "./style.css";
import section2 from "@/assets/images/sectionImages/section2.webp";

const CollectionAbout = () => {
  return (
    <div className="febric-category">
      <div className="img-wrap">
        <div
          className="img-two"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <img src={section2.src} />
        </div>
      </div>
      <div className="text-wrap">
        <h1 className="text-[25px]">The Luxury Cotton</h1>
        <p>
          Discover the luxury of 100% pure cotton with our Shan-e-Azwaan
          collection. Designed for those who appreciate comfort and quality,
          this collection offers a soft and breathable fabric that’s perfect for
          any season. Elevate your wardrobe with the timeless elegance and
          unmatched comfort of Shan-e-Azwaan. Perfect for everyday wear, this
          collection reflects the essence of tradition combined with modern
          style.
        </p>
        <Link href={'/products'} className="flex justify-center py-[15px] w-full mt-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CollectionAbout;
