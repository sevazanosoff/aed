import React from 'react';
import servicesBackgroundImage from '../../assets/images/services__background.png';

import './OurServices.scss';

export const OurServices = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services__wrapper">
                    <div className="services__blocks">
                        <div className="services__block">
                            <h1 className="services__block-title">Наші послуги</h1>
                        </div>
                        <div className="services__block">
                            <p className="services__block-text">
                                Наша команда експертів допомагає окремим особам та групам у створенні кооперативів в
                                секторі будівництва, надаючи консультації протягом усього процесу, від ідеї до юридичної
                                реєстрації.
                            </p>
                            <p className="services__block-text">
                                Ми пропонуємо комплексні навчальні та освітні програми, щоб забезпечити членів
                                кооперативів необхідними навичками, знаннями та найкращими практиками для успішного
                                управління їхніми кооперативами.
                            </p>
                        </div>
                    </div>
                    <div className="services__image">
                        <img src={servicesBackgroundImage} alt="servicesBackground" />
                    </div>
                </div>
            </div>
        </section>
    );
};
