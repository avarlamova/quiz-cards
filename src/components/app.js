import React from 'react';
import List from './list-of-words';
import Header from './header'

const App = () => { 

    const Data = 
        [
            { notation: 'rankle', id:1, de: false },
            { notation: 'husbandry', id:2, de: false },
            { notation: 'das Haus', id:3, de: true }
          ];
    return (
    <div>
        <Header />
        <List words = {Data}/>
    </div>
    );
};

export default App 