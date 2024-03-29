import React, { Component } from "react";
import EditWindow from "./edit-window";
import "./word.css";

class Word extends Component {
  state = {
    isFlipped: false,
  };

  flip = () => {
    this.setState(({ isFlipped }) => {
      return {
        isFlipped: !isFlipped,
      };
    });
  };

  render() {
    const { notation, translation, onDelete, onEditWord, de, id } = this.props;
    const { isFlipped } = this.state;

    let classNames = "word-card";
    if (isFlipped) {
      classNames += " flipped-card";
    }
    if (de) {
      classNames += " german";
    }
    if (de === false) {
      classNames += " english";
    }

    return (
      <div>
        <div className="container my-4">
          <div className={classNames} onClick={this.flip}>
            {isFlipped ? translation : notation}
          </div>
          <div className="row align-items-center mt-2">
            <div className="col-6">
              <EditWindow
                notation={notation}
                translation={translation}
                de={de}
                id={id}
                onEditWord={onEditWord}
              />
            </div>

            <div className="col-6">
              <button
                className="btn btn-sm btn-dark"
                type="button"
                onClick={onDelete}
              >
                {" "}
                Delete card{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Word;
