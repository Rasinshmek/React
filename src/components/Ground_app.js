import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import SignIn from './SignIn';
import ItemList from '../thunk/components/ItemList';
class Ground_app extends Component {
    render() {        
        return (
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route path='/main' component={App} />
                <Route path='/thunk' component={ ItemList } />
            </Switch>
        )
    }
}

export default Ground_app;