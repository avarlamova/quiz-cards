import React, { Component } from 'react';
import './add-word.css';

class NewWord extends Component  { 
    state = {
        notation: '',
        translation: '',
        de: false, 
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

    setGerman = () => {
        this.setState(({de}) => {
          return {
            de: true,
          };
        });
      };

    setEnglish = () => {
        this.setState(({de}) => {
          return {
            de: false,
          };
        });
      };

    render() {

        return(
            <div className="container"> 
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
            <div className="btn-group">
            
            <button type="button"
                className="btn btn-outline-secondary active">German</button>
            <button type="button"
                className="btn btn-outline-secondary">English</button>
            </div>

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
