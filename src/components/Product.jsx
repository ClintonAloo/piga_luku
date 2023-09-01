import Rating from "./Rating";
export default function Product ({product: {name, image, rating, reviews, colors, price}}) {
    return <article className="product">
        <img src={image} alt={name} className="product__img" />
        <div className="product__info">
            <div className="product__header">
                <h5 className="product__name">{name}</h5>
                 <span className="product__price">KSH. {price}</span>   
            </div>
            <div className="product__footer">
               <Rating rating={rating} />
               <span className="product__reviews">({reviews}) review(s)</span>
            </div>
        </div>
    </article>
}