import React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import BuildToggle from './Exercises/BuildToggle'
import CompoundComponent from './Exercises/CompoundComponent'
import FlexibleCC from './Exercises/FlexibleCC'
import RenderProps from './Exercises/RenderProps'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/01" exact={true} component={BuildToggle} />
        <Route path="/02" exact={true} component={CompoundComponent} />
        <Route path="/03" exact={true} component={FlexibleCC} />
        <Route path="/04" exact={true} component={RenderProps} />
      </Switch>
    </BrowserRouter>
  )
}

export { App }