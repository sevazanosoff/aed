import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import { Logo } from '../../components/ui/Logo/Logo';
import instgramIcon from '../../assets/icons/instagramicon.png';
import linkedinIcon from '../../assets/icons/linkedinicon.png';
import twitterIcon from '../../assets/icons/twittericon.png';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <Logo />
                    <nav className="footer__navlinks">
                        <ul className="footer__navlinks-list">
                            <Link className="footer__navlinks-item" to="aboutUs" smooth={true} duration={500}>
                                Про нас
                            </Link>
                            <Link
                                className="footer__navlinks-item"
                                to="ourProjects"
                                smooth={true}
                                duration={500}
                                offset={500}
                            >
                                Наші проєкти
                            </Link>
                            <Link className="footer__navlinks-item" to="contacts" smooth={true} duration={500}>
                                Приєднуйтесь до нас
                            </Link>
                            <Link className="footer__navlinks-item" to="contacts" smooth={true} duration={500}>
                                Контакти
                            </Link>
                        </ul>
                    </nav>
                    <nav className="footer__iconlinks">
                        <ul className="footer__iconlinks-list">
                            <li className="footer__iconlinks-item">
                                <img src={instgramIcon} alt="instagramIcon" />
                            </li>
                            <li className="footer__iconlinks-item">
                                <img src={linkedinIcon} alt="linkedinIcon" />
                            </li>
                            <li className="footer__iconlinks-item">
                                <img src={twitterIcon} alt="twitterIcon" />
                            </li>
                        </ul>
                    </nav>
                    <div className="footer__text-line"></div>
                    <div className="footer__text">© 2019 UnifyBridge. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
};
