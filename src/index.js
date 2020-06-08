import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list-of-words';
import Header from './components/header'

const App = () => { 

    const Data = 
        [
            { notation: 'rankle', id:1, english: true },
            { notation: 'husbandry', id:2, english: true },
            { notation: 'das Haus', id:3, german: true }
          ];
    return (
    <div>
        <Header />
        <List words = {Data}/>
    </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
