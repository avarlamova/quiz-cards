import React, { Component } from 'react';
import EditWindow from './edit-window';
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

      editWord = () => {
        this.setState(({isEdited}) => {
          return {
              isEdited: !isEdited
            };
          });
        };
    
render () {
    
    const { notation, translation, onDelete, editWord, de } = this.props;
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
    <div className = "container functional-btns">
        <div className = "row align-items-center">
          <div className = "col-6">
            <button type = "button"
            className = "btn btn-info btn-sm"
            onClick = {this.editWord}> Edit word </button>
          </div>

          <div className = "col-4"> 
            <button 
            className = "btn btn-sm btn-dark"
            type = "button"
            onClick = {onDelete} 
            > Delete card </button> 
          </div>
        </div>
        </div>
        {isEdited ? <EditWindow /> : ''}
  </div>
</div>  
)
}
}

export default Word

