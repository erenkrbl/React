export function Card ({name}) {
    //const {name } = props;
    return (
        <div className="card-wrapper">
            {name || "MY CARD"}
        </div>
    )
}