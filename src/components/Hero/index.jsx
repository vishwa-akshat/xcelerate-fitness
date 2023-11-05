import BicepImage from "../../assets/bicep.svg";
import AstrekImage from "../../assets/astrek.svg";

import "./hero.scss";

export default function Hero() {
    return (
        <div className="hero-container">
            <h2 className="sub-heading">
                Make your body fit this winter with us.
            </h2>
            <div className="heading-content-wrapper">
                <div className="hero-heading-wrapper">
                    <h1 className="hero-heading">
                        improve your fitness level for the better
                    </h1>
                    <p className="heading-extra-info">
                        more Than 2500 Fitness group Classes Per Month, Find New
                        friends Who will Motivate your fitness goals
                    </p>
                    <img src={BicepImage} className="bicep-image" alt="bicep" />
                </div>
                <div className="hero-side-wrapper">
                    <img src={AstrekImage} className="astek-img" alt="astrek" />
                    <button className="free-pass-block">Free pass</button>
                </div>
            </div>
            <div className="image-small-wrapper"></div>
            <div className="image-large-wrapper"></div>
            <div className="info-wrapper"></div>
        </div>
    );
}
