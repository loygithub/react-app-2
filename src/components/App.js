import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import CharacterList from './characters/CharacterList';
import CharacterDetail from './characters/CharacterDetail';

import history from '../history';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/people" exact component={CharacterList} />
                            <Route path="/people/:id" exact component={CharacterDetail} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;