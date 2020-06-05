import React from 'react';
import ReactDOM from 'react-dom';
//import app from './app';

const Header = () => { return 
    <h1>List of words</h1>
}

const Card = () => { return
<ul>
    <li>husbandry </li>
    <li>rankle</li>
</ul>
}

const Element = () => { return
    <div>
        <header />
        <card />
    </div>
}

ReactDOM.render(<Element />, document.getElementById('root'));
//ReactDOM.render(<app />, document.getElementById('root'));