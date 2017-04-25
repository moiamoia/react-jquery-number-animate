import React, {Component} from 'react'
import {render} from 'react-dom'

import Rnum from '../../src'


class Demo extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      end:1000,
    }
  }

  render() {
    return (
      <section>
      <Rnum sets={{
          start:100,
          end:this.state.end,
          duration:1000,
          easing:'linear',
          format:true,
        }} />
      <button onClick={()=>this.setState(prevState=>({
          end:prevState.end+5000,
        }))}>ADD</button>
        <button onClick={()=>this.setState(prevState=>({
            end:prevState.end-1000,
          }))}>subtract</button>
      </section>
    )
  }
}


render(
  <Demo/>, document.querySelector('#demo'));