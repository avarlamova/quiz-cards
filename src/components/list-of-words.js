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
  const storedItems = keys.map((key) => {
    let storedWord = JSON.parse(localStorage.getItem(key))
      let notation = key;
      let translation = storedWord['translation'];
      let de = storedWord['de'];
      let id = storedWord['id'];
      return (
        <div className = "col-auto" key = {id}>
        <Word 
        notation = {notation}
        de = {de}
        translation = {translation}
        changeLang = {changeLang(de)}
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