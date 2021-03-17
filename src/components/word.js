import React, { Component } from 'react';
import './word.css';

class Word extends Component {

    state = {
            isFlipped: false,
            isEdited: false,
        };

      flip = () => {
          this.setState(({isFlipped}) => {
            return {
                isFlipped: !isFlipped
              };
            });
          };
    
render () {
    
    const { notation, translation, onDelete, editWord, changeLang, de } = this.props;
    const { isFlipped, isEdited } = this.state;
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
    <div className = "container functional-btns">
        <div className = "row align-items-center">
          <div className = "col-4">
            <button type = "button"
            className = "btn btn-info btn-sm"
            onClick = {changeLang}> Change language </button>
          </div>

          <div className = "col-4"> 
            <button 
            className = "btn btn-sm btn-dark"
            type = "button"
            onClick = {onDelete} 
            > Delete card </button> 
          </div>

          <div className = "col-4"> 
            <button 
            className = "btn btn-sm btn-dark"
            type = "button"
            onClick = {editWord}
            > Edit </button> 
          </div>
        </div>
        </div>
        {isEdited ? 
        <prompt> Enter new {isFlipped ? 'translation' : 'notation'} </prompt> : ''}
      </div>  
    )
    }
}

export default Word

