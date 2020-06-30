import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ({words, onDelete} ) => {

  const items = words.map((item) => {
    const {id} =  item;
    return (
      <div className = "col-xs-6 col-sm-4 col-md-3" key = {id} >
        <Word 
        notation = {item.notation} 
        translation = {item.translation}
        onDelete = {() => onDelete(id)}
        />
      </div>
    );
  });
  return (
    <div className = "container"> 
    <div className="row justify-content-around">
      { items }
    </div>
    </div>      
  );
};

   
export default List