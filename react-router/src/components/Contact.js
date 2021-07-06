import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Contact = ({ cards }) => {
   
    // setTimeout(()=> {
    //     props.history.push('/about')
    // }, 2000)
    //console.log(props);
    return (
        <div>
            {
                cards.map((card) => {
                    return (
                        <div 
                            className='ui raised very padded text container segment'
                            style={{ marginTop:'80px' }}
                            key={card.id}
                        >
                            <Link to={`/${card.title}`} className='ui header'>{card.title}</Link>
                            <p>{card.body}</p>      
                
                        </div>
                    )
                })
            }
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