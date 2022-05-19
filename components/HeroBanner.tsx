import Link from "next/link";
import { urlFor } from "../lib/client";
type IBannerData = {
  smallText: string;
  midText: string;
  largeText1: string;
  image: Object;
  product: string;
  buttonText: string;
  desc: string;
};
interface IHeroProps {
  heroBanner: IBannerData;
}
function HeroBanner({ heroBanner }: IHeroProps) {
  return (
    <>
      <div className="hero-banner-container">
        <div>
          <p className="beats-solo">{heroBanner.smallText}</p>
          <h3>{heroBanner.midText}</h3>
          <h1>{heroBanner.largeText1}</h1>
          <img
            src={urlFor(heroBanner.image)}
            alt="headphones"
            className="hero-banner-image"
          />
        </div>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button>{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
