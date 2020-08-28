import React, {Component} from 'react';
import List from './list-of-words';
import Header from './header';
import NewWord from './add-word';
import SearchBar from './search-bar';
import WordsFilter from './words-filter';
import Reset from './reset';

class App extends Component {
    state = {
      
          Data: [
            this.createNewWord('rankle', 'терзать', false),
            this.createNewWord('husbandry', 'сельское хозяйство', false),
            this.createNewWord('das Haus', 'дом', true),
          ],   
          filter: 'All',
          searchedWord: '',
          storage: window.localStorage,
        };

    createNewWord(notation, translation, de) {
      return {
        notation,
        id: Math.floor(Math.random() * 1001),
        translation,
        de,
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

    addWord = (notation, translation, de) => {
        const newWord = this.createNewWord(notation, translation, de);
        this.setState(({ Data }) => {
          const newArray = [...Data,
            newWord,
          ];
          return {
            Data: newArray
          };
        })

        //putting new words to the local storage
        let savedword = notation;
        let savedtranslation = translation;
        localStorage.setItem(savedword, savedtranslation);
      };
      
    searchWords = (words, searchedWord) => {
        if (searchedWord.length === 0) {
          return words;
        }
    
        return words.filter((word) => {
          return word.notation.toLowerCase().indexOf(searchedWord.toLowerCase()) > -1;
        });
      };

    searchChanged = (searchedWord) => {
        this.setState ( {searchedWord} )
      };

    filterWords (words, filter) {

        switch (filter) {
          case 'All': 
            return words;
          case 'German':
            return words.filter((word)=> word.de);
          case 'English':
            return words.filter((word)=> !word.de);
          default:
            return words;

        }
      };

    onFilterChange  = (filter) => {
          this.setState( {filter} )
      };

    changeLang  = (de) => {
            return {
                de: !de
              };
    };
    

render () {

    const { filter, searchedWord, storage } = this.state;
    const words  = this.state.Data;
    const displayedWords = this.filterWords(this.searchWords( words, searchedWord), filter)
    return (
      <div>
            <Header />
            <SearchBar
            searchChanged = {this.searchChanged}/> 
            <WordsFilter 
            filter = { filter }
            onFilterChange = {this.onFilterChange}/>
            <List 
            words = { displayedWords }
            storage = { storage }
            changeLang = {this.changeLang}
            onDelete = {this.deleteWord}
            />
            <NewWord 
            addWord = {this.addWord} 
            />
            <Reset/>
        </div>
        );
}
}



export default App 



     