import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Shop from "@/components/Shop/Shop";
import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      productsData: data,
    },
  };
}

export default function Home({ productsData }) {
  return (
    <>
      <Head>
        <title>Welcome to EcoStyle | Handmade & Ethical Goods</title>
        <meta
          name="description"
          content="Shop eco-friendly clothing, electronics and more."
        />
      </Head>

      <Header />
      <Shop productsData={productsData} />

      <Footer />
    </>
  );
}
