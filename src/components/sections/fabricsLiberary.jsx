"use client";

import "./style.css";
import section3 from "@/assets/images/sectionImages/section3.jpg";

const FabricsLiberary = () => {
  return (
    <div className="fabric-cutting-container py-[10px]">
      <div className="fabric-img">
        <div className="fabric-text-wrap">
          <h2>Fabric Library</h2>
          <p>
            
            Welcome to the Fiztees Library a curated collection of our most
            exceptional fabrics. This space is designed to give you a closer
            look at the premium quality of our materials, from breathable cotton
            to versatile wash-and-wear options.
          </p>
          <p>
            
            At Fiztees, we believe in the art of fabric selection.
            Our library offers an immersive experience, allowing you to explore
            the variety of textures, finishes, and styles we offer.
          </p>
          <p>
            
            Embark on your fabric journey with us and discover the perfect
            material to bring your vision to life.
          </p>
        </div>
        <img src={section3.src} alt="" />
      </div>
    </div>
  );
};

export default FabricsLiberary;
