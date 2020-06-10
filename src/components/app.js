import React from 'react';
import List from './list-of-words';
import Header from './header'

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

export default App 