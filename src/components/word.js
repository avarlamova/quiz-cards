import React, { Component } from 'react';
import './word.css';

class Word extends Component {

    constructor(){
        super();
        
        this.state = {
            isFlipped: false,
            de: false,
        };

        this.onClick = () => {
            this.setState(({isFlipped}) => {
              return {
                isFlipped: !isFlipped
              };
            });
          };

        this.onLangChange = () => {
            this.setState(({de}) => {
              return {
                de: !de
              };
            });
          };
        };

render () {
    
    const { notation, onDelete } = this.props;
    const { isFlipped, de } = this.state;
    let classNames = "word-card";
    if (isFlipped) {
        classNames+=' flipped-card';
    }
    if (de) {
        classNames+=' german';
    } 
    if (de === false) {
        classNames+=' english';
    }

    return ( 
        <div> 
        <span className={classNames}
        onClick={this.onClick} 
        >{ notation } 
        </span>
         <button onClick = {this.onLangChange}> Change language </button>
         <button onClick = {onDelete}> Delete card </button>
        </div>
    )
    }


}



export default Word