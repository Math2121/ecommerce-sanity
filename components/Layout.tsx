import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface ILAyout {
  children: ReactNode;
}
function Layout({ children }: ILAyout) {
  return (
    <>
      <div className="layout">
        <Head>
          <title>Ecommerce</title>
        </Head>
      </div>
      <header>
        <Navbar />
      </header>

      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
