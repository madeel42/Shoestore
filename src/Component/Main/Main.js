import React from 'react'
import { Head } from '../Header/head'
import { Cards } from '../Cards/Cards'
import { Cart } from '../Cart/Cart'
import { Details } from '../Details/slug'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
export const Main = () => {
    return (
        <div>
            <Router>
                <Head />
                <Switch>
                    <Route exact path="/" component={Cards} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/items/:slug" component={Details} />
                </Switch>
            </Router>
        </div>
    )
}
