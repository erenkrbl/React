import React from 'react'

const Contact = (props) => {
    setTimeout(()=> {
        props.history.push('/about')
    }, 2000)
    //console.log(props);
    return (
        <div 
            className='ui raised very padded text container segment'
            style={{ marginTop:'80px' }}
        >
            <h3 className='ui header'>Contact</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>      
            
        </div>
    )
}

export default Contact;