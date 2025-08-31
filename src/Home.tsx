//import { Link } from "react-router-dom";
import HomeDescription from "./components/HomeDescription.tsx";
/*import Card from "./components/Card.tsx";
import { Fragment } from "react";*/
import MainButton from "./components/MainButton.tsx";
//import GoalTracker from "./components/GoalTracker.tsx";
import FAQ from "./components/FAQ.tsx";
import ProjectsList from "./components/ProjectsList.tsx"
import Modal from "./components/Modal.tsx";
function Home() {
    return (
        <div className="content">
            <div className="standardDiv">
                {/*<div className="tagline">
                    <span id="front">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
                    <span id="back">A Digital Billboard Campaign dedicated to Nanashi Mumei</span>
                </div>*/}
                <img className="logoImg" id="logoImgMobile" src="/img/holoflasta-2025-logo.webp"
                     alt=""/>
                <img className="logoImg" id="logoImgDesktop" src="/img/holoflasta-2025-logo.webp"
                     alt=""/>

                <HomeDescription/>
            </div>
            <div className="standardDiv">
                <div className="buttonRow">
                    {/*<MainButton link="https://forms.gle/bEHjHFqBSTtTAvY6A" img="art.svg" text="Contribute Artworks"/>*/}
                    <MainButton link="https://forms.gle/u2vfbmVPvRRJRh268" img="ph.svg" text="Donate Locally (PH)"/>
                    <Modal />
                </div>
                {/*<GoalTracker/>
                <Card text={<Fragment>
                    <img id="certificatePhoto" src="/img/certificate-photo.jpg" alt="Photo of Mumei plushies with HARIBON Foundation certificate"/>
                    <br/><strong>Campaign Ended on April 30, 2025.</strong><br/>
                    Excess money after the GOLDEN GOAL worth PHP 27,763.51 was donated to HARIBON Foundation, an environmental
                    conservation organization based in the Philippines.<br/>
                    <a href="https://haribon.org.ph/" target="_blank"><img id="haribonLogo" src="/img/haribon-logo-full.png" alt="HARIBON Foundation"/></a>
                </Fragment>}/>*/}
                <FAQ/>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default Home;