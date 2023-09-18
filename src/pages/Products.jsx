import Banner from "../components/Banner"
import Filters from "../components/Filters"
import ProductList from "../components/ProductList"
export default function Product({ state }) {
    return <main className="products">
        <Banner page="shop"/>
        <div className="products__body">
            <div className="center-content">
                <Filters state={state}/>
                <ProductList state={state}/>
            </div>
        </div>
    </main>
}