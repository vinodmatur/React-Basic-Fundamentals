import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
    increment = () => {
        // this.setState({
        //     count: this.state.count + 1 
        // }, () => {
        //     console.log('Callback Value: ', this.state.count)
        // })
        this.setState(prevState => ({
            count: prevState.count + 1
        }), () => {
            console.log('Callback Value: ', this.state.count)
        })
        console.log(this.state.count)
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1 
        }, () => {
            console.log('Callback Value: ', this.state.count)
        })
    }


    clear = () => {
        this.setState({
            count: 0
        })
    }

    IncremetntFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
        <div>
            <div>Count {this.state.count}</div>
            <button className='btn btn-primary mr-2' onClick={() => this.IncremetntFive()}>Increment</button>
            <button className='btn btn-danger mr-2' onClick={() => this.decrement()}>Decrement</button>
            <button className='btn btn-danger' onClick={() => this.clear()}>Clear all</button>
        </div>
        )
    }
}

export default Counter