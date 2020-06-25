import React from 'react';
import Word from './word';
import './list-of-words.css';

const List = ( {words, onDelete} ) => {
    
    const items = words.map((item) => {
        const {id} =  item;
        return (
          <div key = {id} >
            <Word 
            notation = {item.notation} 
            translation = {item.translation}
            onDelete = {() => onDelete(id)}
            />
          </div>
        );
      });
      return (
        <div className="list-group-item">
          { items }
        </div>
      );
};

   
export default List