import MainBlock from './components/MainBlock/MainBlock';
import { AboutUs } from './components/AboutUs/AboutUs';
import { OurServices } from './components/OurServices/OurServices';

import { OurProjects } from './components/OurProjects/OurProjects';
import { ReviewsBlock } from './components/ReviewsBlock/ReviewsBlock';
import { Contacts } from './components/Contacts/Contacts';
import { Footer } from './layout/Footer/Footer';

import './app.scss';

function App() {
    return (
        <main className="app">
            <div className="main__layout-wrapper">
                <MainBlock />
            </div>
            <div id="aboutUs" className="about__layout-wrapper">
                <AboutUs />
            </div>
            <div className="services__layout-wrapper">
                <OurServices />
            </div>
            <div id="ourProjects" className="projects__layout-wrapper">
                <OurProjects />
            </div>
            <div className="reviews__layout-wrapper">
                <ReviewsBlock />
            </div>
            <div id="contacts" className="contact__layout-wrapper">
                <Contacts />
            </div>
            <footer className="footer__layout-wrapper">
                <Footer />
            </footer>
        </main>
    );
}

export default App;
