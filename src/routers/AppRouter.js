import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage'
import BlogPage from '../components/Blogpage'
import BlogItem from '../components/BlogItem'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
    <div>  
        <Switch>
            <Route path="/" component={DashboardPage} exact={true} />
            <Route path="/create" component={BlogPage} />
            <Route path="/blog/:id" component={BlogItem} />
            <Route component={NotFoundPage} />
    </Switch>
    </div>
    </Router>
)

export default AppRouter