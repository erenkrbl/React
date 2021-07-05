import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';


const Contact = () => {
    // setTimeout(()=> {
    //     props.history.push('/about')
    // }, 2000)
    //console.log(props);
    return (
        <div>
            <Modal />
            <div 
                className='ui raised very padded text container segment'
                style={{ marginTop:'80px' }}
            >
                <Link to='/alex' className='ui header'>Alex</Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>      
                
            </div>
            <div 
                className='ui raised very padded text container segment'
                style={{ marginTop:'80px' }}
            >
                <Link to='/willma' className='ui header'>willma</Link>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>      
                
            </div>
        </div>
    )
}

export default Contact;