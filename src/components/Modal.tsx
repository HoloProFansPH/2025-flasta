import { useRef } from 'react';
import MainButton from "./MainButton.tsx";

function Modal(){
    "use client";
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    return(
        <>
            <a className="mainButton" onClick={() => dialogRef.current?.showModal()} target="_blank">
                <img height="100%" src={`/svg/worldmap.svg`}/>
                <span>Donate Internationally</span>
            </a>
            <dialog className="dialogCard" ref={dialogRef}>
                <div className="cardHeader">
                    <span className="cardTitle">Donate Internationally</span>
                    <span className="cardTitle" id="closeButton" onClick={() => dialogRef.current?.close()}>X</span>
                </div>
                <p>
                    <b>Thank you for your donation!</b>
                    <br /><br />
                    By proceeding with your donation, you agree that:
                    <br /><br />
                    a) The <b>"HoloFlasta 2025 Project"</b> is a project organized by members of the local hololive community. It is <b>NOT</b> produced nor funded by either COVER Corp., or hololive production. Please take note that this project is non-profit in accordance with <b><i>COVER Corp.'s</i> guidelines on Fan Support Advertising</b>. For any custom user input (such as Name), we reserve the right to remove or censor info if they are found to be unfit for public display. By donating, you understand that this is an <b>unofficial</b>, <b>non-profit</b>, and <b>fan-produced</b> project.
                    <br /><br />
                    b) The <b>"HoloFlasta 2025 Project"</b> accepts donations through GCash, Maya, GoTyme, BPI, BDO, or PayPal (via Ko-fi). By donating, you understand that this donation is <b>non-refundable nor transferable</b> as you submit your donation.
                    <br /><br />
                    c) The <b>"HoloFlasta 2025 Project"</b> will send emails to you regarding the <b>status of your donation, updates about the project,</b> as well as any <b>freebies from its artists and organizers, including illustrations used in the project.</b> By donating, you understand that <b>you may receive these emails</b> only during the duration of the project period (unless there is an important one-time update for next year's HoloFlasta) and that <b>you may unsubscribe at any time</b>.
                    <br /><br />
                    d) By donating, you give us (the <b>"HoloFlasta 2025 Project"</b>) your consent of your personal information. In case there is a violation of the use of your personal information, you may exercise your rights as stated in Republic Act 10173 or the Data Privacy Act of 2012.
                    <br /><br />
                    NOTE: In addition, those who donate a minimum of USD $25 (or more!) before FRIDAY, September 26, 2025 at 11:59 PM (PHT) will have their name featured on a separate sintra board at one of the Flastas!
                    <br /><br />
                    If you <b>agree</b> with the above, feel free to proceed to the Ko-fi to donate:
                    <br /><br />
                    <MainButton link="https://ko-fi.com/phstarlights0603" img="kofi.svg" text="Donate via Ko-fi (PayPal)" />
                </p>
            </dialog>
        </>
    );
}

export default Modal;