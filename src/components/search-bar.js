import React, { Component } from 'react';

class SearchBar extends Component {
  
  
    constructor(){
    super();
    
    this.state = {
        searchedWord: '',
    };
  }  

  searchChanged = (event) => {
    const searchedWord = event.target.value;
    this.setState( {searchedWord} );
    this.props.searchChanged(searchedWord);
  }
  render() {
   
    return ( <div>
      <input type="text"
             className="form-control search-input"
             placeholder="type to search"
             value = {this.state.searchedword}
             onChange = {this.searchChanged}
              />
        </div>
    );
  };
}
export default SearchBar
