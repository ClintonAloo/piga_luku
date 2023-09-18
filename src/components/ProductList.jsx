import Product from "./Product";

export default function ProductList({ state }) {
  const { filtered_products } = state;
  return (
    <div className="products__list">
      {filtered_products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}
