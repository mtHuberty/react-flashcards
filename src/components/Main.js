import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Flashcards from './Flashcards';
import AddCard from './AddCard';

const Main = (props) => {
    return (
        <main id='main'>
            <Switch>
                <Route 
                    path='/flashcards'
                    render={(routeProps) => ( 
                        <Flashcards 
                            testValue={props.testValue}
                            flashcards={props.flashcards}
                            currentCardIndex={props.currentCardIndex}
                            onSkipCard={props.onSkipCard}
                        />
                    )}
                ></Route>
                <Route
                    path='/add-card'
                    component={AddCard}
                ></Route>
            </Switch>
        </main>
    )
}

export default Main;