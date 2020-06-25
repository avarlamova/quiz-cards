import React, {Component} from 'react';
import List from './list-of-words';
import Header from './header';
import NewWord from './add-word';
import SearchBar from './search-bar';
import WordsFilter from './words-filter';

class App extends Component {
    state = {
            Data: [
            this.createNewWord ('rankle', 'терзать'),
            this.createNewWord('husbandry', 'сельское хозяйство'),
            this.createNewWord('das Haus', 'дом'),          
          ],
          filter: 'all',
        };

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

      addWord = (notation, translation) => {
        const newWord = this.createNewWord(notation, translation);
        this.setState(({ Data }) => {
          const newArray = [...Data,
            newWord,
          ];
          return {
            Data: newArray
          };
        })
      };
     
render () {
    return (
      <div>
            <Header />
            <WordsFilter filter = {filter}/>
            <NewWord addWord = {this.addWord}/>
            <List words = {this.state.Data}
            onDelete = {this.deleteWord}
            onChange = {this.searchChanged}
            />
            <SearchBar/> 
        </div>
        );
}
}


export default App 



     