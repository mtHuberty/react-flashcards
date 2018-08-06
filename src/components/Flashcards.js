import React from 'react';
import '../index.css';

class Flashcards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomQuestion: props.flashcards[props.currentCardIndex]
        }
    }

    nextCard() {
        const nextCardIndex = Math.floor(Math.random() * 4);
        this.setState({ currentCardIndex: nextCardIndex });
    }

    render() {
        return (
            <div className='main-board'>
                <h1>Flashcards!</h1>
                <h3>{this.state.randomQuestion.question}</h3>
                <button>{this.state.randomQuestion.answerList[0]}</button>
                <button>{this.state.randomQuestion.answerList[3]}</button>
                <button>{this.state.randomQuestion.answerList[1]}</button>
                <button>{this.state.randomQuestion.answerList[2]}</button>

                <div id='skip-div'>
                    <button onClick={()=>{this.props.onSkipCard()}}>Skip</button>
                </div>
            </div>
        )
    }
}

export default Flashcards;