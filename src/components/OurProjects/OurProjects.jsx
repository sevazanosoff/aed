import React from 'react';
import ProjectItem from './ProjectItem';

import projectImage01 from '../../assets/images/projectimage01.png';
import projectImage02 from '../../assets/images/projectimage02.png';
import projectImage03 from '../../assets/images/projectimage03.png';

import './ourProjects.scss';

export const OurProjects = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects__wrapper">
                    <h1 className="projects__title">Наші проєкти</h1>
                    <div className="projects__blocks">
                        <ProjectItem
                            image={projectImage01}
                            title="Спільний доступ до інформації та відстеження в режимі реального часу"
                            status={false}
                            text="Постачальник будівельних матеріалів та логістична компанія обмінюються даними та використовують технологію відстеження в режимі реального часу для моніторингу руху матеріалів по всьому ланцюгу постачання. Така прозорість покращує комунікацію та допомагає виявити потенційні затримки або вузькі місця, що сприяє швидкому вирішенню проблем та покращенню обслуговування клієнтів."
                        />
                        <ProjectItem
                            image={projectImage02}
                            title="Програми переробки будівельних матеріалів"
                            status={false}
                            reverse={true}
                            text="Постачальники “Tradespip” та клієнт “OpenWan” співпрацюють для реалізації ініціатив з переробки будівельних відходів та надлишкових матеріалів. Програма переробки допомагає зменшити витрати на утилізацію відходів, зберегти ресурси та сприяти сталому будівництву. Постачальники надають рекомендації щодо варіантів переробки та підтримують клієнта у впровадженні цих практик."
                        />
                        <ProjectItem
                            image={projectImage03}
                            title="Співпраця постачальника будівельних  матеріалів “Ecobuild” та підрядників"
                            status={true}
                            text="Постачальник будівельних матеріалів “Ecobuild” тісно співпрацює з будівельними підрядниками, щоб оптимізувати ланцюжок постачання. Розуміючи вимоги та терміни проекту, постачальники доставляє матеріали безпосередньо на будівельні майданчики, скорочуючи час виконання замовлень і потреби у зберіганні на місці. "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
