import React, { Component } from 'react';
import './add-word.css';

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

    onTranslationChange = (event) => {
        this.setState ({
            translation: event.target.value,
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.addWord(this.state.notation, this.state.translation);
        this.setState( {notation: '', translation: '' })
    }

    render() {
        return(
            <div> 
            <form className="item-add-form d-flex" 
            onSubmit={this.onSubmit}> 
            <input 
            type="text" 
            className = "word-add" 
            onChange = {this.onNotationChange}
            placeholder = "type word" 
            value = {this.state.notation}/> 
            <button className = "button-add"
            onClick = { () => this.props.addWord}
            >Add word</button>
            </form>
            <form className = "item-add-form d-flex"> 
            <input 
            type="text" 
            className = 'translation-add'
            onChange = {this.onTranslationChange}
            placeholder = "type translation" 
            value = {this.state.translation}/> 
            </form>
            </div>
        )
    }
}
export default NewWord
