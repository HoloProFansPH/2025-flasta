import type {ReactElement, JSXElementConstructor} from "react";

function Card(props: { main?: boolean; id?: string; style?: any; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>>; }) {
    return(
        <div id={props.id} className={props.main ? "card mainCard" : "card"} style={props.style}>
                {props.text}
        </div>
    );
}

export default Card;