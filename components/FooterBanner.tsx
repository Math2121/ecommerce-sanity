import Link from "next/link";
import { urlFor } from "../lib/client";

interface FooterProps {
  footerBanner: {
    discount: string;
    largeText1: string;
    largeText2: string;
    saleTime: string;
    smallText: string;
    midText: string;
    product: string;
    desc: string;
    buttonText: string;
    image: Object;
  };
}

function FooterBanner({
  footerBanner: {
    buttonText,
    discount,
    largeText1,
    desc,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    image,
  },
}: FooterProps) {
  return (
    <>
      <div className="footer-banner-container">
        <div className="banner-desc">
          <div className="left">
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
          </div>
          <div className="right">
            <p>{smallText}</p>
            <h3>{midText}</h3>
            <h3>{desc}</h3>
            <Link href={`/product/${product}`}>
              <button>{buttonText}</button>
            </Link>
          </div>
          <img src={urlFor(image)} className="footer-banner-image" />
        </div>
      </div>
    </>
  );
}

export default FooterBanner;
