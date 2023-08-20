import React from 'react';
import { Button } from '../ui/Button/Button';
import image01 from '../../assets/images/image01.png';

import './aboutUs.scss';

export const AboutUs = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__blocks">
                    <div className="about__block">
                        <h1 className="about__block-title">Ми надаємо пріоритет довгостроковій стабільності</h1>
                        <p className="about__block-text">
                            В UnifyBridge ми прагнемо сприяти створенню більш справедливого та сталого світу шляхом
                            створення та підтримки кооперативів. Наша місія - надихати та сприяти створенню
                            кооперативів, надаючи людям можливість контролювати свою економічну та соціальну долю. Ми
                            прагнемо створити інклюзивне та спільне середовище, яке сприяє співпраці, довірі та спільній
                            відповідальності.
                        </p>
                        <span className="about__block-button">
                            <Button text={'Приєднатися до нас'} status={true} />
                        </span>
                        <span className="about__block-footer-text">UnifyBridge</span>
                    </div>
                    <div className="about__block">
                        <div className="about__block-image-wrapper">
                            <img className="about__block-image" src={image01} alt="image01" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
