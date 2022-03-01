import React from "react";

// function Greet() {
//     return <h1>Welcome Vinod!</h1>
// }

//export const Greet = () => <h1>Welcome Vinod!</h1>
// const Greet = (props) =>{ 
//     return (
//         <div>
//             <h1>React {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }     


//Destructuring the props and state
const Greet = (props) =>{ 
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}     


export default Greet