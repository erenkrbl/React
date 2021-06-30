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
    constructor(props) {
        super(props) 
            this.state = {
                latitude: 25
            }
        
    }
    
    render () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );
        return(
            <div>
                { this.state.latitude }
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)