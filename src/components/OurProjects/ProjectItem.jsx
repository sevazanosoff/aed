import React from 'react';
import { Button } from '../ui/Button/Button';

import './projectItem.scss';

const ProjectItem = ({ image, title, status, text, reverse }) => {
    return (
        <div className={`project__item ${reverse ? 'project__item project__item-reverse' : 'project__item'}`}>
            <div className="project__item-image">
                <img src={image} alt={title} />
            </div>
            <div className="project__item-content">
                <h2 className="project__item-content-title">{title}</h2>
                <p
                    className={
                        status ? `project__item-content-status success` : `project__item-content-status notsuccess `
                    }
                >
                    {status ? 'Завершено' : 'В процесi'}
                </p>
                <p className="project__item-content-text">{text}</p>
                <span className="project__item-content-button">
                    <Button />
                </span>
            </div>
        </div>
    );
};

export default ProjectItem;
