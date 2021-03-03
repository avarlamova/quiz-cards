import React from 'react'

const Reset = ({clearList}) => {
      return (
        <button 
        className = "btn btn-secondary"
        onClick = {clearList}>
            Clear the list
        </button>
      )    
  }


export default Reset; 
