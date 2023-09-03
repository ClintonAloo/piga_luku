import profileImgC from "../assets/Image.jpeg"
import profileImgN from "../assets/ndubi.jpeg"
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from "react-icons/ai"
function Team () {
    return <section className="about">
            <div className="title-container center-content">
            <h2 className="team__title">team</h2>
                <div className="underline"></div>
                </div>    
        <div className="center-content">
            <div className="team__desc">The team is made up of two ambitious young devs with a passion for kicks, heels and looks. This great team combines to bring forth a common place for all shoe lovers in Kenya. With much passion in software development, creating such fantastic dynamic website is always a pleasure for the two aspiring creators. .</div>
            <div className="card__container">
                <div className="center-content">
                    <div className="profile">
                        <div className="img-container">
                            <img src={profileImgC} alt="" className="profile__img" />
                        </div>
                        <div className="profile__info">
                            <h5 className="profile__name">clinton Aloo</h5>
                            <div className="profile__links">
                                <a href="https://github.com/ClintonAloo" className="profile__link"><AiFillGithub /></a>
                                <a href="https://www.linkedin.com/in/clinton-aloo-732a22184/" className="profile__link"><AiFillLinkedin /></a>
                                <a href="https://twitter.com/clintonaloo" className="profile__link"><AiFillTwitterCircle /></a>
                            </div>
                        </div>
                    </div>
                     <div className="profile">
                        <div className="img-container">
                            <img src={profileImgN} alt="" className="profile__img" />
                        </div>
                        <div className="profile__info">
                            <h5 className="profile__name">Arnold Ndubi</h5>
                            <div className="profile__links">
                                <a href="#" className="profile__link"><AiFillGithub /></a>
                                <a href="#" className="profile__link"><AiFillLinkedin /></a>
                                <a href="#" className="profile__link"><AiFillTwitterCircle /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Team