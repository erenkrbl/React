import React from "react";
import ReactDOM from "react-dom";
import HemisphereDisplay from "./hemisphereDisplay";

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (error) => console.log(error)
    );
    return (
        <div>
            latute:
            <HemisphereDisplay />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)