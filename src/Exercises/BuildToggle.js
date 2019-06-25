//Build Toggle

import React from 'react'
import { Switch } from '../switch'

class Toggle extends React.Component {
  state = {
    on: false
  }
  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      
    )


  render() {
    const { on } = this.state
    return (
      <Switch on={on} onClick={this.toggle}/>
    )
  }
}

export default Toggle
