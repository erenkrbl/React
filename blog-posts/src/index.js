import React from "react";
import ReactDOM from 'react-dom';
import SingleComment from "./SingleComment";


import profile1 from './image/sarah.jpg';
import profile2 from './image/antony.jpg';
import profile3 from './image/helen.jpg';
import UserCard from "./UserCard";


const App = (props) => {
    return (
        <div className='ui comment'>
            <UserCard>
                <div>
                    Hi, My name is Alex, I live in Newyork
                </div>
            </UserCard>

            <UserCard >
                <SingleComment 
                    name='Sarah'
                    date='Today at 5:00PM'
                    text="It's amazing"
                    picture={profile1} 
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Antony'
                    date='Yesterday at 6:00AM'
                    text="Good Jobs"
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name='Helen'
                    date='Tuesday at 3:00PM'
                    text="Succesfully"
                    picture={profile3} 
                />
            </UserCard>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)