import React, { Component } from 'react';
import './word.css';

class Word extends Component {

    constructor(){
        super();
        
        this.state = {
            isFlipped: false,
            de: false,
        };

        this.flip = () => {
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
    
    const { notation, onDelete, translation } = this.props;
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
      <div className = "container">
       <div className = "row"> 
       <div className= {classNames}
        onClick={ this.flip } 
        >{ isFlipped ? translation : notation } 
        </div>
        </div>
        <div className = "container"> 
        <div className = "row justify-content-сenter">
        <div className = "col-2">
          <button type = "button"
          className = "btn btn-primary change-lng"
          onClick = {this.onLangChange}> Change language </button>
         </div>
         <div className = "col-2"> 
          <button 
          type = "button"
          className = "btn btn-primary delete-card" 
          onClick = {onDelete} 
          > Delete card </button> 
        </div>
        </div>
        </div>
        </div>
    )
    }


}



export default Word