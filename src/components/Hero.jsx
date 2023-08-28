
import Navbar from "./Navbar"

export default function Hero({scroll}) {

return <div className="hero">
    <div className="hero__header">
            <Navbar scroll={scroll} />
    </div>
            <div className="hero__body">
                <div className="center-content">

                <h2 className="hero__title">
                    About our site.
                </h2>
                <p className="hero__desc">
                    Sucker for nice kicks and heels? Look no further. Piga Luku is a one-stop online shoe store that saves you the hustle of navigating multiple websites or contacting a list of endless dealers just to get your favorite shoe. Here you will find your favorite sneakers, official leather shoes, or even hiking boots. The piga Luku team is friendly and full of humor. come chat with us. Welcome
                </p>
                <button className="btn btn--secondary">shop</button>
                </div>
            </div>        
</div>

}