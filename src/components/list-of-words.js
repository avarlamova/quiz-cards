import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ( {words} ) => {
    
    const items = words.map((item) => {
        const {id} =  item;
        return (
          <li key = {id}>
            <Word 
            notation = {item.notation} 
            onDelete = {() => console.log(id)}
            />
          </li>
        );
      });
      return (
        <ul className="list-group-item words-list">
          { items }
        </ul>
      );
};

   
export default List