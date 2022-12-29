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
      <div className="container add-form py-3 bg-success-subtle rounded">
        <h3 className="row justify-content-center">Add new word </h3>
        <form className="item-add-form" onSubmit={this.onSubmit}>
          <div className="row justify-content-center">
            <input
              type="text"
              className="word-add col-6"
              onChange={this.onNotationChange}
              placeholder="type word"
              value={this.state.notation}
            />
          </div>
          <div className="row justify-content-center">
            <input
              type="text"
              className="translation-add col-6"
              onChange={this.onTranslationChange}
              placeholder="type translation"
              value={this.state.translation}
            />
          </div>
          <div
            className="btn-group-toggle row justify-content-center gx-2"
            data-toggle="buttons"
          >
            <div className="btn btn-primary active col m-1 col-lg-3 col-sm-6">
              <label>
                <input
                  type="radio"
                  name="1"
                  defaultChecked
                  onChange={this.setGerman}
                />{" "}
                German
              </label>
            </div>

            <div className="btn btn-primary col col-lg-3 col-sm-6 m-1">
              <label>
                <input type="radio" name="1" onChange={this.setEnglish} />{" "}
                English
              </label>
            </div>
          </div>
          <div className="row justify-content-center my-1">
            <button
              type="submit"
              className="btn btn-success col col-lg-6 col-sm-2"
              onClick={() => this.props.addWord}
            >
              Add word
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewWord;
