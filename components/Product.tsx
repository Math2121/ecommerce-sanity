import Link from "next/link";
import { ReactNode } from "react";
import { urlFor } from "../lib/client";

interface ProductProps {
  productData: {
    image: String[];
    name: string;
    slug: {current: string};
    price: string;
  };
}

function Product({productData:{image,name,price,slug}}: ProductProps) {
  return (
    <>
      <div>
        <Link href={`/product/${slug.current}`}>
          <div className="product-card">
            <img
              src={urlFor(image && image[0])}
              width={250}
              height={250}
              className="product-image"
            />

            <p className="product-name">{name}</p>

            <div className="product-price">$ {price}</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
