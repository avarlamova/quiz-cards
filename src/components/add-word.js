import React, { Component } from "react";
import "./add-word.css";

class NewWord extends Component {
  state = {
    notation: "",
    translation: "",
    de: true,
  };

  onNotationChange = (event) => {
    this.setState({
      notation: event.target.value,
    });
  };

  onTranslationChange = (event) => {
    this.setState({
      translation: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addWord(
      this.state.notation,
      this.state.translation,
      this.state.de
    );
    this.setState({ notation: "", translation: "", de: false });
  };

  setGerman = () => {
    this.setState({
      de: true,
    });
  };

  setEnglish = () => {
    this.setState({
      de: false,
    });
  };

  render() {
    return (
      <div className="container add-form">
        <div className="col-6">
          <form className="item-add-form " onSubmit={this.onSubmit}>
            <input
              type="text"
              className="word-add"
              onChange={this.onNotationChange}
              placeholder="type word"
              value={this.state.notation}
            />
          </form>

          <form className="item-add-form ">
            <input
              type="text"
              className="translation-add"
              onChange={this.onTranslationChange}
              placeholder="type translation"
              value={this.state.translation}
            />
          </form>

          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-primary active">
              <input
                type="radio"
                name="1"
                defaultChecked
                onChange={this.setGerman}
              />{" "}
              German
            </label>

            <label className="btn btn-primary">
              <input type="radio" name="1" onChange={this.setEnglish} /> English
            </label>
          </div>
        </div>
        <div className="col-6">
          <button
            className="btn btn-success mt-5"
            onClick={() => this.props.addWord}
          >
            Add word
          </button>
        </div>
      </div>
    );
  }
}
export default NewWord;
