import { GetServerSideProps } from "next";
import React from "react";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import Product from "../components/Product";
import { client } from "../lib/client";
interface ProductProps {
  _id: string;
  image: String[];
  name: string;
  slug: { current: string };
  price: string;
}

const Home = ({ productsData, bannerData }: any) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Seller</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A in sit</p>
      </div>

      <div className="products-container">
        {productsData?.map((product: ProductProps) => (
          <Product productData={product} key={product._id} />
        ))}
      </div>

      <FooterBanner  footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const productsData = await client.fetch(productsQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  console.log(bannerData);
  return {
    props: { productsData, bannerData },
  };
};
