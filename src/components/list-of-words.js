import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ({words, onDelete, changeLang, editWord} ) => {

 /* const keys = Object.keys(localStorage);
  const items = keys.map((key) => {
    let storedWord = JSON.parse(localStorage.getItem(key))
      let notation = key;
      let translation = storedWord['translation'];
      let de = storedWord['de'];
      let id = storedWord['id'];*/
      
      const items = words.map((item) => {
        const {id} = item;
        return (
        <div className = "col-auto" key = {id}>
        <Word 
        notation = {item.notation}
        de = {item.de}
        translation = {item.translation}
        changeLang = {()=>changeLang(item.notation, item.translation, item.de, item.id)}
        onDelete = {() => onDelete(item.notation, words)}
        editWord = {editWord} 
        />
        </div>)
      
  });

  return (
    <div className = "container"> 
      <div className="row justify-content-around">
        { items }
      </div>
    </div> 
         
  );
}
   
export default List