import React from 'react';

const NewWord = ( {addWord} ) => { 
    return(
        <div> 
            <button 
            onClick = { () => addWord('die Welt')}
            >Add item</button>
            </div>
            )
    }

export default NewWord