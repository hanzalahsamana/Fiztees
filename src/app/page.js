"use client";

import Collection from "@/components/sections/collection";
import CollectionAbout from "@/components/sections/collectionAbout";
import FabricsLiberary from "@/components/sections/fabricsLiberary";
import Hero from "@/components/sections/hero";
import Contact from "./contact/page";
import ProductsSection from "@/components/sections/productsSection";
import AddReviews from "@/components/sections/addReviews";
import Display from "@/components/sections/display";


export default function Home() {
 
  return (
    <div className="max-w-[1500px]">
    <Hero/>
    <Collection/>
    <Display/>
    <ProductsSection maxLength={4} collection={'t-shirt'} name={"Best Sellers"}/>
    <CollectionAbout/>
    <ProductsSection maxLength={4} collection={'all'} name={"Best Sellers"}/>
    <FabricsLiberary/>
    <Contact/>
    </div>
  );
}
