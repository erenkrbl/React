import React from "react";
import ReactDOM from "react-dom";
//import HemisphereDisplay from "./hemisphereDisplay";

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (error) => console.log(error)
//     );
//     return (
//         <div>
//             latute:
//             <HemisphereDisplay />
//         </div>
//     )
// }

class App extends React.Component{
  
    render () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                You are in the northen hemisphere
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)