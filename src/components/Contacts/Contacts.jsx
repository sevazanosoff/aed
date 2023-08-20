import React, { useState } from 'react';

import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';

import './contacts.scss';

export const Contacts = () => {
    const [isValid, setIsValid] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        email: '',
        phone: '',
        comment: ''
    });

    const validateField = (field, value) => {
        let error = '';

        switch (field) {
            case 'name':
            case 'secondName':
                if (!value.trim()) error = 'Это поле обязательно';
                break;
            case 'email':
                const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!emailPattern.test(value)) error = 'Неверный формат email';
                break;
            case 'phone':
                const phonePattern = /^\+?[1-9]\d{1,14}$/;
                if (!phonePattern.test(value)) error = 'Неверный формат телефона';
                break;
            default:
                break;
        }

        setErrors({ ...errors, [field]: error });
    };

    const checkValidity = () => {
        const isValidForm = Object.values(formData).every((value) => value.trim() !== '');
        setIsValid(isValidForm);
    };

    const handleChange = (e, field) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            [field]: value
        });
        validateField(field, value);
        checkValidity();
    };

    const onSubmit = () => {
        setIsSubmitted(true);
        if (isValid) {
            console.log('Отправка данных:', formData);
            alert(`Данные отправлены! Объект:\n${JSON.stringify(formData, null, 2)}`);
            setFormData({
                name: '',
                secondName: '',
                email: '',
                phone: '',
                comment: ''
            });
            setIsSubmitted(false);
        }
    };

    return (
        <section className="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <h1 className="contacts__title">Ми будемо раді співпрацювати з вами!</h1>
                    <div className="contacts__blocks">
                        <div className="contacts__info">
                            <div className="contacts__info-item">
                                <h3 className="contacts__info-item-title">Телефон</h3>
                                <p className="contacts__info-item-text">+ (380) 012 3456 789</p>
                            </div>
                            <div className="contacts__info-item">
                                <h3 className="contacts__info-item-title">Email</h3>
                                <p className="contacts__info-item-text">unifybridge@gmail.com</p>
                            </div>
                            <div className="contacts__info-item">
                                <h3 className="contacts__info-item-title">Адреса</h3>
                                <p className="contacts__info-item-text">вулиця Сирецька, 30/1, Київ, 04080</p>
                            </div>
                        </div>
                        <form type="submit" className="contacts__info-form">
                            <div className="contacts__info-form-block">
                                <div className="contacts__info-form-item">
                                    <Input
                                        text={`${"Iм'я"}`}
                                        type={'text'}
                                        placeholder={`${"Iм'я"}`}
                                        value={formData.name}
                                        onChange={(e) => handleChange(e, 'name')}
                                        error={errors.name}
                                        isSubmitted={isSubmitted}
                                    />
                                </div>
                                <div className="contacts__info-form-item">
                                    <Input
                                        text={'Прiзвище'}
                                        type={'text'}
                                        placeholder={'Прiзвище'}
                                        value={formData.secondName}
                                        onChange={(e) => handleChange(e, 'secondName')}
                                        error={errors.secondName}
                                        isSubmitted={isSubmitted}
                                    />
                                </div>
                            </div>

                            <div className="contacts__info-form-block">
                                <div className="contacts__info-form-item">
                                    <Input
                                        text={'Email'}
                                        type={'email'}
                                        placeholder={'example@gmail.com'}
                                        value={formData.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                        error={errors.email}
                                        isSubmitted={isSubmitted}
                                    />
                                </div>
                                <div className="contacts__info-form-item">
                                    <Input
                                        text={'Мобiльний'}
                                        type={'number'}
                                        placeholder={'+ 380'}
                                        value={formData.phone}
                                        onChange={(e) => handleChange(e, 'phone')}
                                        error={errors.phone}
                                        isSubmitted={isSubmitted}
                                    />
                                </div>
                            </div>
                            <div className="contacts__info-form-item">
                                <Input
                                    text={'Повiдомлення'}
                                    type={'textarea'}
                                    placeholder={'Введіть своє повідомлення'}
                                    fullWidth={true}
                                    value={formData.comment}
                                    onChange={(e) => handleChange(e, 'comment')}
                                    error={errors.comment}
                                    isSubmitted={isSubmitted}
                                />
                            </div>
                            <span className="contacts__info-form-button" onClick={isValid ? onSubmit : null}>
                                <Button text={'Приєднатися до нас'} status={true} />
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
