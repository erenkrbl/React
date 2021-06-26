import React from "react";
import ReactDOM from 'react-dom';
import profile1 from './image/sarah.jpg';
import profile2 from './image/antony.jpg';
import profile3 from './image/helen.jpg';

const App = () => {
    return (
        <div className='ui comments'>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={ profile1 } alt="profile picture" /> 
                </a>
                <div className='content'>
                    <a href="/" className='autor'>
                        Sarah
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={ profile2 } alt="profile picture" /> 
                </a>
                <div className='content'>
                    <a href="/" className='autor'>
                        Antony
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing
                    </div>
                </div>
            </div>
            <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={ profile3 } alt="profile picture" /> 
                </a>
                <div className='content'>
                    <a href="/" className='autor'>
                        Helen
                    </a>
                    <div className='metadata'>
                        <span className='data'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        It's amazing
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)