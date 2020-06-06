import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import Header from './components/header'



const Element = () => { 
    return (
    <div>
        <Header />
        <Card />
    </div>
    );
};

ReactDOM.render(<Element />, document.getElementById('root'));
