import React from 'react';
import list from './list-of-words';

const Card = () => { 
    return (
        <ul>
            <li>{list[0]} </li>
            <li>{list[1]}</li>
        </ul> 
    );
};

export default Card