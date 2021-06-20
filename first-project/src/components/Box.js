import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"YGUY"
        }
    }

    render () {
        // console.log(this.props)
        return ( 
            <div className="box-wrapper">
                {this.state.name || "BOX"}
            </div>
        )
    }
}

export default Box;