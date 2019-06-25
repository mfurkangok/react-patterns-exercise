import React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import BuildToggle from './Exercises/BuildToggle'
import CompoundComponent from './Exercises/CompoundComponent'
import FlexibleCC from './Exercises/FlexibleCC'
import RenderProps from './Exercises/RenderProps'
import PropCollections from './Exercises/PropCollections'
import PropGetters from './Exercises/PropGetters'
import StateInitializers from './Exercises/StateInitializers'
import StateReducers from './Exercises/StateReducers'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/01" exact={true} component={BuildToggle} />
        <Route path="/02" exact={true} component={CompoundComponent} />
        <Route path="/03" exact={true} component={FlexibleCC} />
        <Route path="/04" exact={true} component={RenderProps} />
        <Route path="/05" exact={true} component={PropCollections} />
        <Route path="/06" exact={true} component={PropGetters} />
        <Route path="/07" exact={true} component={StateInitializers} />
        <Route path="/08" exact={true} component={StateReducers} />
      </Switch>
    </BrowserRouter>
  )
}

export { App }