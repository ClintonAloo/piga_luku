
import Navbar from "./Navbar"

export default function Hero({scroll}) {

return <div className="hero">
    <div className="hero__header">
            <Navbar scroll={scroll} />
    </div>
            <div className="hero__body">
                <div className="center-content">

                <h2 className="hero__title">
                    Lorem ipsum dolor sit.
                </h2>
                <p className="hero__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum cupiditate velit earum, laborum natus rerum amet enim ab necessitatibus mollitia. Enim nemo nostrum mollitia veniam, cumque eius pariatur eligendi eaque, cum excepturi sit consequatur dolore porro quod odit quia accusamus similique ex fugit aliquam. Expedita commodi dolorem fugiat sapiente impedit!
                </p>
                <button className="btn btn--secondary">shop</button>
                </div>
            </div>        
</div>

}