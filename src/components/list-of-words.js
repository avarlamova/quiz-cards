import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ({words, onDelete, changeLang} ) => {

  /*const items = words.map((item) => {
    const {id} = item;
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
  });*/

  const keys = Object.keys(localStorage);
  let not;
  let trans;
  const storedItems = keys.map((key) => {
    let storedWord = JSON.parse(localStorage.getItem(key))
      not = key;
      trans = storedWord['translation'];
      let de = storedWord['de'];
      let id = storedWord['id'];
      return (
        <div className = "col-auto" key = {not}>
        <Word 
        notation = {not}
        de = {de}
        translation = {trans}
        changeLang = {changeLang}
        onDelete = {() => onDelete(id)} 
        />
        </div>)
      
  });

  return (
    <div className = "container"> 
      <div className="row justify-content-around">
        
        { storedItems }
      </div>
    </div> 
         
  );
}
   
export default List