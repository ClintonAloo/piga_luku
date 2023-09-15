import Rating from "./Rating";
export default function Product({
  product: { name, image, rating, reviews, colors, price },
}) {
  return (
    <article className="product">
      <img src={image} alt={name} className="product__img" />
      <div className="product__info">
        <div className="product__header">
          <h5 className="product__name">{name}</h5>
          <span className="product__price">KSH. {price}</span>
        </div>
        <div className="product__footer">
          <div className="product__reviews">
            <Rating rating={rating} />
            <span className="product__reviews">({reviews}) review(s)</span>
          </div>
          <div className="product__colors">
            <span className="colors__heading">colors:</span>
            {colors.map((color, index) => {
              return (
                <div
                  key={index}
                  className="color"
                  style={{ backgroundColor: color }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}
