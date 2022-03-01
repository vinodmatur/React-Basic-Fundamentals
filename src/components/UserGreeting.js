import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }

  render() {
//Short Circuit Operator
    return this.state.isLoggedIn && <div>Welcome Vinod!</div>

//Ternary conditional operator
    // return (
    //     this.state.isLoggedIn ? 'Welcome Vinod!' : 'Welcome Guest'
    // )

//Element Variable Approach
    //   let message;
    //   if(this.state.isLoggedIn){
    //     message = <div>Welcome Vinod!</div>
    //   }else{
    //     message = <div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>


//If/else block
    //   if(this.state.isLoggedIn){
    //       return (
    //           <div>Welcome Vinod!</div>
    //       )
    //   }else{
    //       return(
    //         <div>Welcome Guest!</div>
    //       )
    // }
    // return (
    //   <div >
    //     <div>Welcome Vinod!</div>
    //     <div>Welcome Guest!</div>
    //   </div>
    // )
  }
}

export default UserGreeting