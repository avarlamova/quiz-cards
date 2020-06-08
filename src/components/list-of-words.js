import React from 'react';
import Word from './word';

const List = ( {words} ) => {
    
    const items = words.map((item) => {
        return (
          <li key = {item.id}>
            <Word 
            notation = {item.notation} 
            />
          </li>
        );
      });
      return (
        <ul>
          { items }
        </ul>
      );
};

   
export default List