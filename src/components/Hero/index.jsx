import BicepImage from "../../assets/bicep.svg";
import AstrekImage from "../../assets/astrek.svg";
import HeroImage1 from "../../assets/hero_img1.jpg";
import HeroImage2 from "../../assets/hero_img2.jpg";
import SmileyImage from "../../assets/smiley.svg";

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
            <div className="hero-part2-wrapper">
                <div className="image-part1-wrapper">
                    <div className="image-small-wrapper">
                        <div className="overlay-text">
                            Reach your body goals
                        </div>
                        <img
                            src={HeroImage1}
                            className="image-1"
                            alt="exercise"
                        />
                    </div>
                    <div className="info-wrapper">
                        <div className="smiley-wrapper">
                            <img
                                src={SmileyImage}
                                className="smiley"
                                alt="smiley"
                            />
                        </div>
                        <div className="customer-number">950k+</div>
                        <div className="happy-customer">Happy customers</div>
                    </div>
                </div>
                <div className="image-large-wrapper">
                    <img src={HeroImage2} className="image-2" alt="exercise" />
                    <div className="overlay-content">
                        <p className="text-1">Lets try</p>
                        <p className="text-2">Reach your body goals</p>
                        <p className="text-3">body goals target</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
