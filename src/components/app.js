import React, {Component} from 'react';
import List from './list-of-words';
import Header from './header';
import NewWord from './add-word-form';

class App extends Component {
    state = {
            Data: [
            this.createNewWord ('rankle', 'терзать'),
            this.createNewWord('husbandry', 'сельское хозяйство'),
            this.createNewWord('das Haus', 'дом'),          
          ]
        };

    startId = 100;

    createNewWord(notation, translation) {
      return {
        notation,
        id: Math.floor(Math.random() * 101),
        de: false,
        translation,
      }
    };

    deleteWord = (id) => {
        this.setState(({ Data }) => {
          const delId = Data.findIndex((el) => el.id === id);
          const newArr = [...Data.slice(0, delId), ...Data.slice(delId + 1)];   
          return {
            Data: newArr
          };
        });
      };

      addWord = (text, translation) => {
        const newWord = this.createNewWord(text, translation)
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
            <NewWord addWord = {this.addWord}/>
            <List words = {this.state.Data}
            onDelete = {this.deleteWord}
            />
        </div>
        );
}
}


export default App 



     