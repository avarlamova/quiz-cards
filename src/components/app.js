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
            this.createNewWord('rankle','терзать', false),
            this.createNewWord('husbandry','сельское хозяйство',false),
            this.createNewWord('das Haus','дом', true),
          ],
          filter: 'All',
          searchedWord: '',
          wordIsEdited: false,
        };

    createNewWord (notation, translation, de) {
      let storedObject = {
        translation: translation,
        de: de,
        id: Math.floor(Math.random() * 1001)
      }
      localStorage.setItem(notation, JSON.stringify(storedObject));
      return storedObject;
    };

    deleteWord = (id) => {
        this.setState(({ Data }) => {
          const delId = Data.findIndex((el) => el.id === id);
          const newArr = [...Data.slice(0, delId), ...Data.slice(delId + 1)];
          return {
            Data: newArr,
          }; 
        });
      };

    editWord = () => {
        this.setState(({wordIsEdited}) => {
        return {
          wordIsEdited: !wordIsEdited,
          };
        })
      };

    addWord = (notation, translation, de) => {
        const newWord = this.createNewWord(notation, translation, de);
        this.setState(({ Data }) => {
          const newArray = [...Data,
            newWord,
          ]; 
          return {
            Data: newArray,
          };
        })
        }

    searchWords = (words, searchedWord) => {
        if (searchedWord.length === 0) {
          return words;
        }

        return words.filter((word) => {
          return word.notation.toLowerCase().indexOf(searchedWord.toLowerCase()) > -1;
        });
      };

    searchChanged = (searchedWord) => {
      this.setState({searchedWord})
      };

    filterWords (words, filter) {
      switch (filter) {
          case 'All': 
            return words;
          case 'German':
            return words.filter((word)=> word.de === true);
          case 'English':
            return words.filter((word)=> word.de === false);
          default:
            return words;
        }
      };

    onFilterChange = (filter) => {
        this.setState({filter} )
      };

      //переделать функцию на edit? чтобы изменялся язык и другие параметры 
      //через попап модальное окно
    editWord = (notation, translation, de, id) => {

      let newLang = {
        translation: translation,
        de: !de,
        id: id
      }
      localStorage.setItem(notation, JSON.stringify(newLang));
      return newLang;
    };

    clearList = () => {
      this.setState(() => {
        return {
          Data: [],
        };
      })
      localStorage.clear()
    }

render () {

    const { filter, searchedWord } = this.state;
    const keys = Object.keys(localStorage);
    const words = Array.from(keys.map((key) => {
    let word = JSON.parse(localStorage.getItem(key))
      return {
        notation: key,
        translation: word.translation,
        de: word.de,
        id: word.id
      }
    }));
    const displayedWords = this.filterWords(this.searchWords(words, searchedWord), filter)
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
            onDelete = {this.deleteWord}
            editWord = {this.editWord}
            /> 
            <NewWord 
            addWord = {this.addWord} 
            />
            <Reset
            words = {displayedWords}
            clearList = {this.clearList}
            />
        </div>
        );
}
}


export default App 



     