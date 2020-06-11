import React, { Component } from 'react';
import './word.css';

class Word extends Component {
    constructor(){
        super();
        
        this.state = {
            isFlipped: false,
        }

        this.onClick = () => {
            this.setState(
                {
                isFlipped: true,
                }
            );
        }
    }

    
render () {
    
    const { notation } = this.props;
    const { isFlipped } = this.state;
    let classNames = "word-card";
    if (isFlipped) {
        classNames+='flipped-card';
    }

    return ( 
        <span className={classNames}
        onClick={this.onClick} 
        >{ notation } 
        </span>
    )
    }


}



export default Word