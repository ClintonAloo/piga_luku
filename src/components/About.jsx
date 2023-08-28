import profileImgC from "../assets/Image.jpeg"
import profileImgN from "../assets/ndubi.jpeg"
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai"
function About () {
    return <section className="about">
        <div className="about__title">
            Team     
        </div>
        <div className="center-content about-center">
            <div className="profile-card">
                <div className="img-container">
                    <img src={profileImgC} alt="profile image" className="profile-card__img" />
                    <div className="profile-card__body">
                        <div className="card__name">Clinton Aloo</div>   
                    </div>
                    <div className="profile-card__footer">
                        <a rel="nonreferrer" target="_blank" href="https://github.com/ClintonAloo">
                            <AiFillGithub/>
                        </a>
                        <a rel="nonreferrer" target="_blank" href="https://www.linkedin.com/in/clinton-aloo-732a22184/">
                            <AiFillLinkedin/>
                        </a>
                        <a rel="nonreferrer" target="_blank" href="https://twitter.com/clintonaloo">
                            <AiFillTwitterCircle/>
                        </a>
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
                        <a rel="nonreferrer" target="_blank" href="https://github.com/Arnold-Ndubi">
                            <AiFillGithub/>
                        </a>
                        <a rel="nonreferrer" target="_blank" href="https://www.linkedin.com/in/arnold-ndubi-03b624184/">
                            <AiFillLinkedin/>
                        </a>
                        <a rel="nonreferrer" target="_blank" href="https://twitter.com/Anduby">
                            <AiFillTwitterCircle/>
                        </a>

                    </div>
                </div>    
            </div> 
        </div>  
    </section>
}

export default About