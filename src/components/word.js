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
    const { notation, translation, onDelete, onEditWord, de, wordIsEdited } =
      this.props;
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
        <div className="container">
          <div className={classNames} onClick={this.flip}>
            {isFlipped ? translation : notation}
          </div>
          <div className="container functional-btns">
            <div className="row align-items-center">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  onClick={onEditWord}
                >
                  {" "}
                  Edit word{" "}
                </button>
              </div>

              <div className="col-4">
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
          <EditWindow
          //isOpen={isOpen}
          //showModal={showModal}
          //hideModal={hideModal}
          />
        </div>
      </div>
    );
  }
}

export default Word;
