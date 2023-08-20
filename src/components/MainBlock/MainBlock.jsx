import React from 'react';
import './mainBlock.scss';
import { Header } from '../../layout/Header/Header';
import { Button } from '../ui/Button/Button';

const MainBlock = () => {
    return (
        <section className="main__screen">
            <div className="container">
                <Header />
                <div className="main__screen-block main__block">
                    <h1 className="main__block-title">Розбудова кооперативів</h1>
                    <p className="main__block-text">
                        Поєднуємо постачальників будматеріалів зі своїми споживачами та логістикою. Ми твердо віримо,
                        що, надихаючи людей та громади працювати разом, ми зможемо побудувати світле майбутнє, де голос
                        кожного буде почутий, а можливості будуть доступні для всіх.
                    </p>
                    <span className="main__block-button">
                        <Button text={'Приєднатися до нас'} />
                    </span>
                    <span className="main__block-button">
                        <Button text={'Дiзнатися бiльше'} />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default MainBlock;
