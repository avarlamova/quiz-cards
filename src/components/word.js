import React, { Component } from 'react';
import './word.css';

class Word extends Component {

    constructor(){
        super();
        
        this.state = {
            isFlipped: false,
            de: false,
        };
      }

        flip = () => {
            this.setState(({isFlipped}) => {
              return {
                isFlipped: !isFlipped
              };
            });
          };


render () {
    
    const { notation, translation, onDelete, onLangChange } = this.props;
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
      <div className="container"> 

      <div className={classNames}
      onClick={ this.flip } >
      { isFlipped ? translation : notation } 
    </div>
    </div>
    <div className = "container">
        <div className = "row justify-content-around">
          <div className = "col-6">
            <button type = "button"
            className = "btn btn-info btn-sm"
            onClick = {onLangChange}> Change language </button>
          </div>

          <div className = "col-6"> 
            <button 
            className = "btn btn-sm btn-dark"
            type = "button"
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