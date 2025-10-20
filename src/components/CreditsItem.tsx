function CreditsItem(props: { title: string; names: string[] }) {
    return(
        <div className="creditsObject">
            <div className="creditsTitle">
                {props.title}
            </div>
            <div className="creditsNames">
                {props.names.map((name, idx) => (
                    <span key={idx}>{name}</span>
                ))}
            </div>
        </div>
    );
}

export default CreditsItem;