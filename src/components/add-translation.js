import React, { Component } from 'react';

export default class NewTranslation extends Component  { 
    state = {
        translation: '',
    }
   
    onTranslationChange = (e) => {
        this.setState ({
            translation: e.target.value,
        })
    };


    onTranslationSubmit = (event) => {
        event.preventDefault();
        this.props.addTranslation(this.state.translation);
        this.setState( {translation: ''})
    }

    render() {
        return(
            <div> 
            <form className="item-add-form d-flex" 
            onSubmit={this.onTranslationSubmit}> 
            <input 
            type="text" 
            className = "form-control" 
            onChange = {this.onTranslationChange}
            placeholder = "type word" 
            value = {this.state.notation}/> 
          <button className = "btn-add"
            onClick = { () => this.props.addTranslation}
            >Add translation</button>
            </form>
            </div>
        )
    }
}
