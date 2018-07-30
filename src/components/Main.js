import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Flashcards from './Flashcards';
import AddCard from './AddCard';

const Main = () => (
    <main>
        <Switch>
            <Route path='/flashcards' component={Flashcards}></Route>
            <Route path='/add-card' component={AddCard}></Route>
        </Switch>
    </main>
)

export default Main;