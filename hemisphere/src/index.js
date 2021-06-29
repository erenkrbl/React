import React from "react";
import ReactDOM from "react-dom";

import HemisphereDisplay from "./hemisphereDisplay";
window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (error) => console.log(error)
);

const App = () => {
    return (
        <div>
            Hello
            <HemisphereDisplay />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)