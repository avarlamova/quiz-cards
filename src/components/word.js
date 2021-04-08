import React, { useState } from 'react';
import EditWindow from './edit-window';
import './word.css';

const Word =({notation, translation, onDelete, editWord, de, word}) => {
    
    const [isFlipped, setFlipped] = useState(false);
    const [isOpen, setOpen] = useState(false);
    
    const showModal = () => {
      setOpen(true);
    };
    const hideModal = () => {
      setOpen(false);
    };

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
      onClick={setFlipped(!isFlipped) } >
      { isFlipped ? translation : notation } 
    </div>
    <div className = "container functional-btns">
        <div className = "row align-items-center">
          <div className = "col-6">
            <button type = "button"
            className = "btn btn-info btn-sm"
            onClick = {setOpen(!isOpen)}> Edit word </button>
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
        {isOpen ? <EditWindow 
        isOpen={isOpen}
        showModal={showModal} 
        hideModal={hideModal}/> : ''}
  </div>
</div>  
)
}


export default Word

