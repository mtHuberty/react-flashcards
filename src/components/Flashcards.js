import React from 'react';

const Flashcards = (props) => {
    return (
        <div>
            <h1>Flashcards!</h1>
            <h1>{props.testValue}</h1>
        </div>
    )
}

export default Flashcards;