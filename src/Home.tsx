//import { Link } from "react-router-dom";
import HomeDescription from "./components/HomeDescription.tsx";
/*import Card from "./components/Card.tsx";
import { Fragment } from "react";*/
import MainButton from "./components/MainButton.tsx";
import GoalTracker from "./components/GoalTracker.tsx";
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
                <GoalTracker/>
                <FAQ/>
                <div id="flasta-2024" className="card">
                    <p id="flasta-2024-content">
                        <img src="/img/2024-flasta-logo.webp" alt="HoloFlasta Project 2024"/><br/><br/>
                        <img id="mainPhoto" src="/img/2024-flasta.webp" alt="Photo of 2024 HoloFlasta"/>
                        <br/><strong>Campaign Ended on October 6, 2024.</strong><br/>
                        HoloPro Fans PH was responsible for organizing the <strong>HoloFlasta 2024 Project</strong> in collaboration with other local hololive and HOLOSTARS community members as well as the donations of the community, which produced two flower stands dedicated to Anya Melfissa, Jurard T. Rexford, Octavio, and Vestia Zeta for Cosplay Mania 2024!<br/>
                    </p>
                    <img id="flasta-2024-bg" src="/img/2024-flasta-bg.webp" />
                </div>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default Home;