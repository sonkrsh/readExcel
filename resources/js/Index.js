import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './User'
import AdminRoute from './Admin/AdminRoute'

function Index(props) {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route component={AdminRoute} />
            </Switch>
        </div>
    )
}

export default Index


if (document.getElementById('root')) {
    ReactDOM.render(<Router><Index /></Router>, document.getElementById('root'));
}

