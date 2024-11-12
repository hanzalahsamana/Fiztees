"use client";

import CollectionCard from "@/components/UI/collectionCard";
import collection1 from '../../assets/images/productImages/heritage-1.jpg';
import collection2 from "@/assets/images/collections/collection2.png";
import collection3 from "@/assets/images/collections/collection3.webp";



const Collection = () => {
    const collections = [{
        _id: 1,
        title: "t-shirt",
        alt: "t-shirt",
        image: collection1.src,
        link: "/collection/t-shirt",
      },
      {
        _id: 2,
        title: "Shan-e-Azwaan",
        alt: "Shan-e-Azwaan",
        image: collection2.src,
        link: "/collection/shan-e-azwaan",
      }, {
        _id: 3,
        title: "t-shirt",
        alt: "t-shirt",
        image: collection3.src,
        link: "/collection/t-shirt",
      },
      ]
  return (
    <div className="grid grid-cols-3 max-[700px]:grid-cols-1 gap-5 m-6">
      {collections?.map((collection) => (
        <CollectionCard key={collection._id} collection={collection} />
      ))}
    </div>
  );
};

export default Collection;
