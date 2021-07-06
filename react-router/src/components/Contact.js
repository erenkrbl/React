import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { connect } from 'react-redux';


const Contact = (props) => {
    console.log(props.cards);
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

const mapStateToProps = (state) => {
    //const cards = state.cards;
    const { cards } = state;
    return {
        // cards: cards
        cards
    }
}

export default connect(mapStateToProps) (Contact);