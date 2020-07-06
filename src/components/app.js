import React, {Component} from 'react';
import List from './list-of-words';
import Header from './header';
import NewWord from './add-word';
import SearchBar from './search-bar';
import WordsFilter from './words-filter';

class App extends Component {
    state = {
      
          Data: [
            this.createNewWord('rankle', 'терзать', false),
            this.createNewWord('husbandry', 'сельское хозяйство', false),
            this.createNewWord('das Haus', 'дом', true),
          ],   
          filter: 'All',
          searchedWord: '',
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
        console.log('lang changed');
            return {
                de: !de
              };
          };  
     
render () {

    const { filter, searchedWord } = this.state;
    const words  = this.state.Data;
    const displayedWords = this.filterWords(this.searchWords( words, searchedWord), filter)
    return (
      <div>
            <Header />
            <WordsFilter 
            filter = { filter }
            onFilterChange = {this.onFilterChange}/>
            <NewWord addWord = {this.addWord}/>
            <List 
            words = { displayedWords }
            changeLang = {this.changeLang}
            onDelete = {this.deleteWord}
            />
            <SearchBar
            searchChanged = {this.searchChanged}/> 
        </div>
        );
}
}



export default App 



     