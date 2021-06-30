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
            this.state = { latitude: 25, longitude: 23 }
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.setState({ 
                        latitude: position.coords.latitude, 
                        errorMessage: ''  })
                },
                (error) => {
                    this.setState({ errorMessage: error.message })
                }
            );
        
    }
    
    render () {
        
        if(this.state.errorMessage && !this.state.latitude) {
            return <div>{ this.state.errorMessage }</div>
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return <div>{ this.state.latitude }</div>
        }
        else {
            return <div>Loading......</div>
        }
        
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)