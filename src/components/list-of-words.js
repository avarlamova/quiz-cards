import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ({words, onDelete, changeLang} ) => {

  const items = words.map((item) => {
    const {id} =  item;
    return (
      <div className = "col-auto" key = {id} >
        <Word 
        notation = {item.notation} 
        translation = {item.translation}
        de = {item.de}
        changeLang = {changeLang}
        onDelete = {() => onDelete(id)}
        />
      </div>
    );
  });
  const keys = Object.keys(localStorage);
  let not;
  let trans;
  const storedItems = keys.map((key) => {
      not = key;
      trans = localStorage.getItem(key);
      return (
        <div>
        <Word 
        notation = {not}
        translation = {trans} />
        </div>)
  });

  return (
    <div className = "container"> 
    <div className="row justify-content-around">
      { items }
      {storedItems}
    </div>

    </div> 
         
  );
}
   
export default List