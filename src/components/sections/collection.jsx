"use client";

import CollectionCard from "@/components/UI/collectionCard";
import collection1 from "@/assets/images/collections/t-shirt1.png";
import collection2 from "@/assets/images/collections/bottom1.png";
import collection3 from "@/assets/images/collections/graphic1.png";



const Collection = () => {
    const collections = [{
        _id: 1,
        title: "T Shirts",
        alt: "t-shirt",
        image: collection1.src,
        link: "/collection/t-shirt",
      },
      {
        _id: 2,
        title: "Bottoms",
        alt: "bottom",
        image: collection2.src,
        link: "/collection/bottom",
      }, {
        _id: 3,
        title: "Oversize / Graphic",
        alt: "oversize-graphic",
        image: collection3.src,
        link: "/collection/oversized",
      },
      ]
  return (
    <div>

      <h1 className="text-center mt-3 font-bold">Collections</h1>
    <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-5 m-6">
      {collections?.map((collection) => (
        <CollectionCard key={collection._id} collection={collection} />
      ))}
    </div>
      </div>
  );
};

export default Collection;
