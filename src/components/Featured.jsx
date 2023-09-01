import Product from "./Product";

export default function Featured ({state}) {
    const {all_products} = state
    console.log(all_products.filter(p => p.featured));
    return <section className="featured">
            <h4 className="featured__title">
                    featured
                </h4>
                <div className="center-content center--featured">'
                        {all_products.filter(product => product.featured).map(product => {

                        return <Product key={product.id} product={product} />
                        })}
                </div>    
    </section>
}