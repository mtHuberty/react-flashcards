import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testValue: 10
        }
    }

    render() {
        return (
            <div>
                {/* Child components */}
                <h1>TESTING!</h1>
                <Header />
                <Main testValue={this.state.testValue} />
            </div>
        );
    }
}

 export default App;