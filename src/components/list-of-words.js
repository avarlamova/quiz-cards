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
  const values = keys.map((key) => {
    
      let not = key;
      let trans = localStorage.getItem(key);

      return (
        <>
        <Word 
        notation = {not} 
        translation = {trans}
        changeLang = {changeLang}
        />
        </>
      )
    
  }
  )
  
  return (
    <div className = "container"> 
    <div className="row justify-content-around">
      { items }
      { values }
    </div>

    </div> 
         
  );
};

   
export default List