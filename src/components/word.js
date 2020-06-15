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
      <div> 
        <div className={classNames}
        onClick={ this.flip } 
        >{ isFlipped ? translation : notation } 
        </div>
        <div> 
         <button className = "change-lang" 
         onClick = {this.onLangChange} 
         value = "Change language"/> 
        </div>
        <div> 
         <button className = "btn" onClick = {onDelete} /> Delete card 
         </div>
         </div>
    )
    }


}



export default Word