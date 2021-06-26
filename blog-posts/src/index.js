import React from "react";
import ReactDOM from 'react-dom';
import SingleComment from "./SingleComment";
import profile1 from './image/sarah.jpg';
import profile2 from './image/antony.jpg';
import profile3 from './image/helen.jpg';


const App = (props) => {
    return (
        <div className='ui comments'>
            <SingleComment 
                name='Sarah'
                date='Today at 5:00PM'
                comment="It's amazing"
                picture={profile1} 
            />
            <SingleComment 
                name='Antony'
                date='Yesterday at 6:00AM'
                comment="Good Jobs"
                picture={profile2}
            />
            <SingleComment 
                name='Helen'
                date='Tuesday at 3:00PM'
                comment="Succesfully"
                picture={profile3} 
            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)