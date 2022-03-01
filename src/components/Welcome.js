import React, { Component } from "react";

class Welcome extends React.Component{
    render(){
        const {name, heroName} = this.props
        return(
            <div>
                {/* <h1>React {this.props.name} a.k.a {this.props.heroName}</h1> */}
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </div>
        )
    }
}

export default Welcome
