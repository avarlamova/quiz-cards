import React, { Component } from "react";
import List from "./list-of-words";
import Header from "./header";
import NewWord from "./add-word";
import SearchBar from "./search-bar";
import WordsFilter from "./words-filter";
import Reset from "./reset";
import EditWindow from "./edit-window";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    Data: [
      this.createNewWord(
        "rankle",
        "терзать",
        false,
        "cdfd2ade-c6c3-4bc5-b528-fbc8667c5c07"
      ),
      this.createNewWord(
        "husbandry",
        "сельское хозяйство",
        false,
        "f29dffff-a89e-4f8f-ad19-0e1f88add1f0"
      ),
      this.createNewWord(
        "das Haus",
        "дом",
        true,
        "f84c84c1-e056-4311-a928-526ec6754a37"
      ),
    ],
    filter: "All",
    searchedWord: "",
    wordIsEdited: false,
  };

  createNewWord(notation, translation, de, id = uuidv4()) {
    // const id = uuidv4();
    let storedObject = {
      notation: notation,
      translation: translation,
      de: de,
    };
    localStorage.setItem(id, JSON.stringify(storedObject));
    return storedObject;
  }

  deleteWord = (notation, words) => {
    // TODO удаление по айди
    localStorage.removeItem(notation);
    this.setState(({ Data }) => {
      const delIndex = words.findIndex((el) => el.notation === notation);
      const newarr = [
        ...words.slice(0, delIndex),
        ...words.slice(delIndex + 1),
      ];
      return {
        Data: newarr,
      };
    });
  };

  onEditWord = (id, updatedData) => {
    // TODO апдейт локал стораджа
    console.log(this.state.Data);
    const editIdx = this.state.Data.findIndex((el) => el.id === id);
    this.setState(({ Data }) => {
      let newarr = [...Data];
      newarr.splice(editIdx, 1);
      const newItem = this.createNewWord(
        updatedData.notation,
        updatedData.translation,
        updatedData.de
      );
      newarr = [...newarr, newItem];
      return {
        Data: newarr,
      };
    });
    console.log(this.state.Data);
  };

  addWord = (notation, translation, de) => {
    const newWord = this.createNewWord(notation, translation, de);
    this.setState(({ Data }) => {
      const newArray = [...Data, newWord];
      return {
        Data: newArray,
      };
    });
  };

  searchWords = (words, searchedWord) => {
    if (searchedWord.length === 0) {
      return words;
    }

    return words.filter((word) => {
      return (
        word.notation.toLowerCase().indexOf(searchedWord.toLowerCase()) > -1
      );
    });
  };

  searchChanged = (searchedWord) => {
    this.setState({ searchedWord });
  };

  filterWords(words, filter) {
    switch (filter) {
      case "All":
        return words;
      case "German":
        return words.filter((word) => word.de === true);
      case "English":
        return words.filter((word) => word.de === false);
      default:
        return words;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  clearList = () => {
    this.setState(() => {
      return {
        Data: [],
      };
    });
    localStorage.clear();
  };

  render() {
    const { filter, searchedWord, wordIsEdited } = this.state;
    const keys = Object.keys(localStorage);
    const words = Array.from(
      keys.map((key) => {
        let word = JSON.parse(localStorage.getItem(key));
        return {
          notation: word.notation,
          translation: word.translation,
          de: word.de,
          id: key,
        };
      })
    );
    const displayedWords = this.filterWords(
      this.searchWords(words, searchedWord),
      filter
    );
    return (
      <div>
        <Header />
        <SearchBar searchChanged={this.searchChanged} />
        <WordsFilter filter={filter} onFilterChange={this.onFilterChange} />
        <List
          words={displayedWords}
          onDelete={this.deleteWord}
          onEditWord={this.onEditWord}
          wordIsEdited={wordIsEdited}
        />
        <NewWord addWord={this.addWord} />
        <Reset words={displayedWords} clearList={this.clearList} />
        {wordIsEdited ? <EditWindow /> : ""}
      </div>
    );
  }
}

export default App;
