import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText(){
//     return (
//         "Hi There"
//     )
// }

const App =() => {
    const buttonText = {text: "Submit"};
    return (
        <div>
            <label htmlFor="name" className="blabel">enter e-mail</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'red', color: 'white'}} >{buttonText.text}</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)