import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CharacterList from './characters/CharacterList';
import CharacterDetails from './characters/CharacterDetails';

import history from '../history';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Router history={history}>
                    <div>
                        <Switch>
                            <Redirect exact from="/" to="/people" />
                            <Route path="/people" exact component={CharacterList} />
                            <Route path="/people/:id" exact component={CharacterDetails} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;