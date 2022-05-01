import React from "react";
import Word from "./word";
import "./list-of-words.css";

const List = ({ words, onDelete, changeLang, onEditWord }) => {
  const items = words.map((item) => {
    const { id } = item;
    return (
      <div className="col-auto" key={id}>
        <Word
          notation={item.notation}
          de={item.de}
          translation={item.translation}
          changeLang={() =>
            changeLang(item.notation, item.translation, item.de, item.id)
          }
          onDelete={() => onDelete(item.notation, words)}
          onEditWord={onEditWord}
          id={id}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row justify-content-around">{items}</div>
    </div>
  );
};

export default List;
