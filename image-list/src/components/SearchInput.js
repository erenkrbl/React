import React from 'react';

class SearchInput extends React.Component {
    // constructor(props){
    //     super(props);
    //     state: this.state
    // }

    render(){
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <div className='ui massive icon input'>
                            <input type="text" placeholder='search...'/>
                            <i className='search icon'></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;