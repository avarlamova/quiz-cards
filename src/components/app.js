import React, {Component} from 'react';
import List from './list-of-words';
import Header from './header';
import NewWord from './add-word-form';

class App extends Component {
    state = {
            Data: [
            { notation: 'rankle', id:1, de: false, translation: 'терзать' },
            { notation: 'husbandry', id:2, de: false, translation: 'сельское хозяйство' },
            { notation: 'das Haus', id:3, de: true, translation: 'дом' }
          ]
        };

    startId = 4;

    deleteWord = (id) => {
        this.setState(({ Data }) => {
          const delId = Data.findIndex((el) => el.id === id);
          const newArr = [...Data.slice(0, delId), ...Data.slice(delId + 1)];   
          return {
            Data: newArr
          };
        });
      };

      addWord = (text) => {
        const newWord = {
          notation: text,
          //id: Math.floor(Math.random() * 101),
          de: true,
          id: this.startId++,
        }
        this.setState(({ Data }) => {
          const newArray = [...Data,newWord];
          
          return {
            Data: newArray
          };
        })
      };

render () {
    return (
        <div>
            <Header />
            <List words = {this.state.Data}
            onDelete = {this.deleteWord}
            />
            <NewWord addWord = {this.addWord}/>
        </div>
        );
}
}


export default App 



     