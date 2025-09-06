import type {ReactElement, JSXElementConstructor} from "react";

function Card(props: { id?: string; style?: any; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>>; }) {
    return(
        <div id={props.id} className="card" style={props.style}>
                {props.text}
        </div>
    );
}

export default Card;