import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: 10,
            flashcards: [
                {
                    question: 'The jellyfish is a member of the ______ genus.',
                    answerList: ['Stomolophus', 'Lepidoptra', 'Lupae', 'Argonidae'],
                    correctAnswerIndex: 0
                },
                {
                    question: 'The fourth element on the periodic table',
                    answerList: ['Hydrogen', 'Nitrogen', 'Oxygen', 'Beryllium'],
                    correctAnswerIndex: 3
                },
                {
                    question: 'The final "operation" in the mathematical order of operations is:',
                    answerList: ['Addition', 'Multiplication', 'Subtraction', 'Argonidae'],
                    correctAnswerIndex: 2
                },
                {
                    question: 'The official ending year of World War 1',
                    answerList: ['1916', '1917', '1918', '1919'],
                    correctAnswerIndex: 2
                },
            ],
            currentCardIndex: 0
        }
    }

    onSkipCard() {
        let randomIndex = Math.floor(Math.random() * 4);
        this.setState({ currentCardIndex: randomIndex});
    }

    render() {
        return (
            <div className=''>
                {/* Child components */}
                <h1>TESTING!</h1>
                <Header />
                <Main 
                    testValue={this.state.testValue}
                    flashcards={this.state.flashcards}
                    currentCardIndex={this.state.currentCardIndex}
                    onSkipCard={this.onSkipCard}
                />
            </div>
        );
    }
}

 export default App;