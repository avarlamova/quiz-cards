import React, { Component } from 'react';
import './add-word-form.css';

class NewWord extends Component  { 
    state = {
        notation: '',
        translation: '',
    }
    onNotationChange = (event) => {
        this.setState ({
            notation: event.target.value,
        })
    };
    
    onTranslationChange = (e) => {
        this.setState ({
            translation: e.target.value,
        })
    };

    onNotationSubmit = (event) => {
        event.preventDefault();
        this.props.addWord(this.state.notation);
        this.setState( {notation: ''})
    }

    onTranslationSubmit = (event) => {
        event.preventDefault();
        this.props.addWord(this.state.translation);
        this.setState( {translation: ''})
    }

    render() {
        return(
            <div> 
            <form className="item-add-form d-flex" 
            onSubmit={this.onNotationSubmit}> 
            <input 
            type="text" 
            className = "form-control" 
            onChange = {this.onNotationChange}
            placeholder = "type word" 
            value = {this.state.notation}/> 
            <button className = "btn-add"
            onClick = { () => this.props.addWord}
            >Add item</button>
            </form>
            
            <form 
            className="item-add-form d-flex"
            onSubmit = {this.onTranslationSubmit}> 
            <input 
            type="text" 
            className = "form-control" 
            onChange = {this.onTranslationChange}
            placeholder = "type translation" 
            value = {this.state.translation}/> 
            </form>
            </div>
        )
    }
}
export default NewWord