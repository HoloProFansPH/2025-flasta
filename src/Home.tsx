//import { Link } from "react-router-dom";
import HomeDescription from "./components/HomeDescription.tsx";
import Card from "./components/Card.tsx";
import { Fragment } from "react";
//import MainButton from "./components/MainButton.tsx";
import GoalTracker from "./components/GoalTracker.tsx";
import FAQ from "./components/FAQ.tsx";
import ProjectsList from "./components/ProjectsList.tsx"
//import Modal from "./components/Modal.tsx";
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
                <Card main text={
                    <Fragment>
                        <div className="cardHeader" style={{justifyContent: "center"}}>
                            <span className="cardTitle">Thank you!</span>
                        </div>
                        <img id="mainPhoto" src="/img/2025-flasta-final.webp" alt="HoloFlasta 2025 at Cosplay Mania 2025"/>
                        <img id="mainPhoto" src="/img/2025-flasta-meetup.webp" alt="HoloFlasta 2025 standees at HoloMEETUP Cosplay Mania 2025"/>
                        <p>
                            <b>Thank you for making this happen, see you next time!</b>
                            <br/><br/>
                        </p>
                    </Fragment>
                }/>
                {/*<div className="buttonRow">
                    <MainButton link="https://forms.gle/bEHjHFqBSTtTAvY6A" img="art.svg" text="Contribute Artworks"/>
                    <MainButton link="https://forms.gle/u2vfbmVPvRRJRh268" img="ph.svg" text="Donate Locally (PH)"/>
                    <Modal />
                </div>*/}
                <Card main text={
                    <Fragment>
                        <div className="cardHeader" style={{justifyContent: "center"}}>
                            <span className="cardTitle">Artists</span>
                        </div>
                        <div className="artistList">
                            <a className="artistItem" href="https://twitter.com/soulless009">
                                <img height="32px" src="/svg/trex.svg" alt="Jurard"/>
                                <div className="artistInfo"><span className="artistName">Soulless Sanctuary</span><span>@soulless009</span></div>
                            </a>
                            <a className="artistItem" href="https://twitter.com/psymeeme">
                                <img height="32px" src="/svg/eagle.svg" alt="Goldbullet"/>
                                <div className="artistInfo"><span className="artistName">Psymee</span><span>@psymeeme</span></div>
                            </a>
                            <a className="artistItem" href="https://twitter.com/Eiolle99">
                                <img height="32px" src="/svg/infinity.svg" alt="Octavio"/>
                                <div className="artistInfo"><span className="artistName">Eiolle</span><span>@Eiolle99</span></div>
                            </a>
                            <a className="artistItem" href="https://twitter.com/chloesenzai">
                                <img height="32px" src="/svg/anger.svg" alt="Ruze"/>
                                <div className="artistInfo"><span className="artistName">Chloe Senzai</span><span>@chloesenzai</span></div>
                            </a>
                            <a className="artistItem" href="https://twitter.com/2yanko_rii">
                                <img height="32px" src="/svg/trex.svg" alt="Jurard"/>
                                <img height="32px" src="/svg/eagle.svg" alt="Goldbullet"/>
                                <img height="32px" src="/svg/infinity.svg" alt="Octavio"/>
                                <img height="32px" src="/svg/anger.svg" alt="Ruze"/>
                                <div className="artistInfo"><span className="artistName">Peachy Z</span><span>@2yanko_rii</span></div>
                            </a>
                        </div>
                    </Fragment>
                }/>
                <Card main text={<Fragment>
                    <div className="cardHeader" style={{justifyContent: "center"}}>
                        <span className="cardTitle">Made possible by</span>
                    </div>
                    <div className="donorNamesMain">
                        <div className="donorNamesColumn">
                            <span>ACDI33</span>
                            <span>AJ ROBERTS</span>
                            <span>AKEA</span>
                            <span>CMDRCACTUS</span>
                            <span>ENDEEE</span>
                            <span>HAJIME0813</span>
                            <span>HA//VOQ</span>
                        </div>
                        <div className="donorNamesColumn">
                            <span>ITS_NOT_ME_JOHN</span>
                            <span>JEDI LEMON</span>
                            <span>JUSTMOMOCHI</span>
                            <span>K.B. DOODLES</span>
                            <span>MAR</span>
                            <span>MEIMEI ÉCLAT</span>
                        </div>
                        <div className="donorNamesColumn">
                            <span>NINJA BLUE COSPLAY</span>
                            <span>PEACH MANGO</span>
                            <span>REN</span>
                            <span>ROZEE</span>
                            <span>TELES SHIINA</span>
                            <span>YULIULIYULI</span>
                            <span>ZOMBIEDOG3000</span>
                        </div>
                    </div>
                    <div className="donorNamesSub">
                        <div className="donorNamesColumn">
                            <span>75CENTZ</span>
                            <span>CHIKAI</span>
                            <span>ECHO.ONLINE</span>
                            <span>EUVERY</span>
                            <span>GONGOOZLER</span>
                        </div>
                        <div className="donorNamesColumn">
                            <span>KILAWEIL</span>
                            <span>LILYH</span>
                            <span>MARLON</span>
                            <span>NATE</span>
                            <span>NEKOYA</span>
                        </div>
                        <div className="donorNamesColumn">
                            <span>PEEPEEPPUPPU</span>
                            <span>RYE</span>
                            <span>SEKI</span>
                            <span>SOMEBODY</span>
                            <span>YUMIRIX</span>
                        </div>
                    </div>
                </Fragment>}/>
                <Card main text={<Fragment>
                    <div className="cardHeader" style={{justifyContent: "center"}}>
                        <span className="cardTitle">Credits</span>
                    </div>
                    <p style={{marginBlockStart: 0}}>
                        Executive Producers: AwHellNao, acdi33<br/>
                        Project Coordinators: xiaol0ngbob0, deirmentia<br/>
                        Logistics Coordinator: violet2108<br/>
                        Website: Madekuji_san<br/>
                        Financials: Akiio_Tako<br/>
                        Event Coordinator: jirusus, kurizu_joji<br/>
                    </p>
                </Fragment>}/>
                <GoalTracker/>
                <FAQ/>
                <div id="flasta-2024" className="card">
                    <p id="flasta-2024-content">
                        <img src="/img/2024-flasta-logo.webp" alt="HoloFlasta Project 2024"/><br/><br/>
                        <img id="mainPhoto" src="/img/2024-flasta.webp" alt="Photo of 2024 HoloFlasta"/>
                        <br/><strong>Campaign Ended on October 6, 2024.</strong><br/>
                        HoloPro Fans PH was responsible for organizing the <strong>HoloFlasta 2024 Project</strong> in collaboration with other local hololive and HOLOSTARS community members as well as the donations of the community, which produced two flower stands dedicated to Anya Melfissa, Jurard T. Rexford, Octavio, and Vestia Zeta for Cosplay Mania 2024!<br/>
                    </p>
                    <img id="flasta-2024-bg" src="/img/2024-flasta-bg.webp" alt="HoloFlasta 2024 BG"/>
                </div>
                <ProjectsList/>
            </div>
        </div>
    );
}

export default Home;