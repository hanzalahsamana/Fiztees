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
        <h1 className="text-[25px]">The Pure Essence</h1>
        <p>
          Experience the perfect blend of comfort and style with our T-shirt collection.
          Crafted from 100% pure cotton, each shirt is designed to offer a soft, breathable fit, ensuring
          you stay cool and comfortable all day long. Ideal for both casual outings and everyday wear, these 
          t-shirts exude timeless elegance with a modern twist. Elevate your wardrobe with the luxury of 
          pure cotton and enjoy the ultimate in comfort and quality with every wear.
        </p>
        <Link href={'/products'} className="flex justify-center py-[15px] w-full mt-6 bg-black text-[#e6e6e6] text-[16px]  transition-all duration-300 hover:scale-105">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CollectionAbout;
