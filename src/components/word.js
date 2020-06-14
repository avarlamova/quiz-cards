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
        <div className={classNames}
        onClick={this.onClick} 
        >{ notation } 
        <div> 
         <button className = "lng-change" onClick = {this.onLangChange} /> Change language 
        </div>
        <div> 
         <button className = "delete-card" onClick = {onDelete} /> Delete card 
         </div>
         </div>
    )
    }


}



export default Word