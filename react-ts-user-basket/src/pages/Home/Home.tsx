import { useContext } from "react";
import BasketContext from "../../contexts/BasketContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Home.css";

export default function Home(): JSX.Element {
  const { shop } = useContext(BasketContext);
  return (
    <>
      {/* Start Content */}
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" />
      {/* products */}
      <main className="main-index">
        {shop.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </main>
    </>
  );
}
