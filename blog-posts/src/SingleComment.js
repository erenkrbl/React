import React from 'react';
import profile1 from './image/sarah.jpg';


const SingleComment = () => {
    return (
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
    )
}

export default SingleComment;