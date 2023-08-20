import React from 'react';
import { Link } from 'react-scroll';
import { Logo } from '../../components/ui/Logo/Logo';

import './header.scss';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <span className="header__logo">
                        <Logo />
                    </span>
                    <div className="header__block">
                        <nav className="header__links">
                            <Link className="header__links-link" href="/" to="aboutUs" smooth={true} duration={500}>
                                Про нас
                            </Link>
                            <Link
                                className="header__links-link"
                                href="/"
                                to="ourProjects"
                                smooth={true}
                                duration={500}
                                offset={500}
                            >
                                Наші проєкти
                            </Link>
                            <Link className="header__links-link" href="/" to="contacts" smooth={true} duration={500}>
                                Приєднуйтесь до нас
                            </Link>
                            <Link className="header__links-link" href="/" to="contacts" smooth={true} duration={500}>
                                Контакти
                            </Link>
                            <div className="header__language">
                                UA{' '}
                                <svg
                                    className="header__language-arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="24"
                                    viewBox="0 0 25 24"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5 13.172L17.45 8.222L18.864 9.636L12.5 16L6.13601 9.636L7.55101 8.222L12.501 13.172H12.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </nav>
                        <div className="header__join">
                            <span className="header__join-text">Приєднатися</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
