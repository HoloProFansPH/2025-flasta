import type {ReactElement, JSXElementConstructor} from "react";
import { Fragment } from "react";

function FAQitem(props: {q: string | ReactElement<any, string | JSXElementConstructor<any>>; a: string | ReactElement<any, string | JSXElementConstructor<any>>; }) {
    return (
        <div className="FAQitem">
            <span className="FAQquestion">Q: {props.q}</span>
            <p>A: {props.a}</p>
        </div>
    );
}

function FAQ() {
    return (
        <div className="card">
            <div className="cardHeader">
                <span className="cardTitle">FAQ</span>
            </div>
            <div className="tableFlex">
                <FAQitem q={<Fragment>What is <i>HoloPro Fans PH?</i> What is <i>PH Starlights?</i></Fragment>} a="HoloPro Fans PH is an organization that produces hololive & HOLOSTARS
fan projects and events in the Philippines, both online and offline. HoloPro Fans PH has also been responsible for the 2024 HoloFlasta Project. PH Starlights is an unoffcial fan group dedicated to supporting
HOLOSTARS, UPROAR!!, and HOLOSTARS English as a whole. Both HoloPro Fans PH and PH Starlights are collaborating on the 2025 HoloFlasta Project while abiding by COVER Corp.'s Fan Support Advertising Guidelines."/>
                <FAQitem q={<Fragment>How can I support <i>HoloFlasta Project?</i></Fragment>} a="You can send your donations at flasta.holoprofansph.org via our official Ko-fi under ko-fi.com/phstarlights0603. For fans
residing in the Philippines, you can donate locally via GCash, Maya, GoTyme, BDO, and BPI."/>
                <FAQitem q="What happens if the goal is not reached?" a="The organizers may seek compromises to the original goal of the project to fit the final donation amount."/>
                <FAQitem q="Will there be physical events during the campaign?" a="While we cannot guarantee the success of the campaign, the flower stands will be available for viewing to the public as it will be positioned outside of the halls inside SMX Convention Center. Fans are welcome to visit the area and share their experiences with the hashtag #HoloFlastaPH2025✨. Any announcements regarding gatherings or meet-ups will be posted on the official HoloPro Fans PH and PH Starlights Twitter (X) and Facebook social media accounts."/>
            </div>
        </div>
    );
}

export default FAQ;