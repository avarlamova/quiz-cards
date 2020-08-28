import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ({words, onDelete, changeLang, storage} ) => {

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
  const values = keys.map((i) => {
    return localStorage.getItem(i)
  }
  );
 console.log(values);
  
  
//так же пройтись мапом по сторадж и отобразить внизу после {items}
  return (
    <div className = "container"> 
    <div className="row justify-content-around">
      { items }
    </div>
    </div>      
  );
};

   
export default List