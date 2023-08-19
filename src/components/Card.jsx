import cardImg from "../assets/shoe_img.jpeg"

const formArray = [
    {
        id: 1,
        label: "size"
    }, {
        id: 2,
        label: "color"
    }, {
        id: 3,
        label: "quantity"
    }
]
const Card = () => {
return (
    <div className="card">
      <div className="card__info">'
      <img src={cardImg} alt="" className="card__img" />
      <h5 className="card__price">$45</h5>
      <p className="card__desc">free shipping</p>
      </div>
      <form className="form">
        {formArray.map(item => {

       return  <div key={item.id} className="form__row">
          <label className="form__label" htmlFor={item.label}>{item.label}</label>
          <input className="form__input" type="text" id={item.label} />
        </div>

        })}
        <button className="form__btn">add to cart</button>
      </form>
    </div>
)
}

export default Card