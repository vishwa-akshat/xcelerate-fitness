import MenuIcon from "../../assets/menu.svg";

import "./navbar.scss";

export default function Navbar() {
    return (
        <div className="navbar-container">
            <p className="logo-text">XCELERATE FITNESS</p>
            <div className="navbar-links-wrapper">
                <a href="#" className="nav-link">
                    Home
                </a>
                <a href="#" className="nav-link">
                    Goals
                </a>
                <a href="#" className="nav-link">
                    Services
                </a>
                <a href="#" className="nav-link">
                    Contact
                </a>
            </div>
            <img src={MenuIcon} alt="menu" className="menu-icon" />
        </div>
    );
}
