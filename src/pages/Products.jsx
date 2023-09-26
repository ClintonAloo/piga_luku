import Banner from "../components/Banner";
import Filters from "../components/Filters";
import ProductList from "../components/ProductList";
export default function Product({ state, setSearch, setCompany }) {
  return (
    <main className="products">
      <Banner page="shop" />
      <div className="products__body">
        <div className="center-content">
          <Filters
            state={state}
            setSearch={setSearch}
            setCompany={setCompany}
          />
          <ProductList state={state} />
        </div>
      </div>
    </main>
  );
}
