import React, { Component } from 'react';

class WordsFilter extends Component {
    filterbtn = [
        {name: 'All', label: 'All'},
        {name: 'German', label: 'German'},
        {name: 'English', label: 'English'},
    ];

    render () {

        const {filter, onFilterChange} = this.props;
       
        const filterbuttons = this.filterbtn.map( ({name, label}) => {
            const isActive = filter === name;
            const classToAdd = isActive? 'btn-info': 'btn-outline-secondary'
            return (
              
                <button type = "button" 
                className = {`btn ${classToAdd}`}
                key = {name}
                onClick = { () => onFilterChange (name)}
                >
                {label}
                </button>
                
            );
        }
        )

        return filterbuttons;
    }
}

export default WordsFilter