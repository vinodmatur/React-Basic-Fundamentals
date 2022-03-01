import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class PareComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Vinod'
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Vinod'
            })
        }, 2000)
    }
  render() {
    return (
      <div>
          Parent Component
          <RegComp name={this.state.name} />
          <PureComp name={this.state.name} />
          {/* <MemoComp name={this.state.name} /> */}
      </div>
    )
  }
}

export default PareComp