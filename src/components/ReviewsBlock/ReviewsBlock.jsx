import React from 'react';

import reviewsImage from '../../assets/images/reviewsImage01.png';
import youtubeIcon from '../../assets/icons/youtubeicon.png';
import arrowLeft from '../../assets/icons/arrowLeft.png';
import arrowRight from '../../assets/icons/arrowRight.png';

import './reviewsBlock.scss';
import { Button } from '../ui/Button/Button';

export const ReviewsBlock = () => {
    return (
        <section className="reviews">
            <div className="container">
                <div className="reviews__wrapper">
                    <h1 className="reviews__title">Відгуки клієнтів</h1>
                    <div className="reviews__block">
                        <div className="reviews__block-image">
                            <img src={reviewsImage} alt="reviewsImage" />
                        </div>
                        <div className="reviews__block-content">
                            <h2 className="reviews__block-content-title">
                                “Рекомендую UnifyBridge, як надійних партнерів”{' '}
                            </h2>
                            <h3 className="reviews__block-content-subtitle">
                                Євген Пуліпко, керівник відділу продажів в Ecobuild{' '}
                            </h3>
                            <span className="reviews__block-content-button">
                                <Button icon={youtubeIcon} text={'Дивитися вiдгук'} status={true} />
                            </span>
                            <div className="reviews__more">
                                <div className="reviews__more-arrows">
                                    <img src={arrowLeft} alt="left arrow" className="reviews__more-arrow" />
                                    <img src={arrowRight} alt="right arrow" className="reviews__more-arrow" />
                                </div>
                                <p className="reviews__more-text">Бiльше вiдгукiв</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
