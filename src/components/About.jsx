import profileImgC from "../assets/Image.jpeg"
import profileImgN from "../assets/ndubi.jpeg"
function About () {
    return <section className="about">
        <div className="about__title">
            team     
        </div>
        <div className="center-content about-center">
            <div className="profile-card">
                <div className="img-container">
                    <img src={profileImgC} alt="profile image" className="profile-card__img" />
                    <div className="profile-card__body">
                        <div className="card__name">Clinton Aloo</div>   
                    </div>
                    <div className="profile-card__footer">

                    </div>
                </div>    
            </div>    
             <div className="profile-card">
                <div className="img-comtainer">
                    <img src={profileImgN} alt="profile image" className="profile-card__img" />
                    <div className="profile-card__body">
                        <div className="card__name">Arnold Ndubi</div>   
                    </div>
                    <div className="profile-card__footer">

                    </div>
                </div>    
            </div> 
        </div>  
    </section>
}

export default About