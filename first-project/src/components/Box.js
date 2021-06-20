import React from 'react';

class Box extends React.Component {

    state = {
        name:"XGUY"
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