import React, { Component } from 'react';

class WordsFilter extends Component {
    filterbtn = [
        {name: 'all', label: 'all'},
        {name: 'German', label: 'German'},
        {name: 'English', label: 'English'},
    ];

    render () {

        const {filter} = this.props;

        const filterbuttons = this.filterbtn.map( ({name, label}) => {
            return (
              
                <button type = "button" 
                className = "btn btn-secondary"
                key = {name}
                >
                {label}
                </button>
                
            );
        }
        )

        //const isActive = filter = name;
        return filterbuttons;
    }
}

export default WordsFilter