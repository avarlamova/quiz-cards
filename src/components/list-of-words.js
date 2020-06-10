import React from 'react';
import Word from './word';
import './list-of-words.css';
//import { ReactComponent } from '*.svg';

/*class List extends ReactComponent {
  render() {
    const {words} = this.props;
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
      <ul className="list-group-item words-list">
        { items }
      </ul>
    );
  }

}
*/

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
        <ul className="list-group-item words-list">
          { items }
        </ul>
      );
};

   
export default List