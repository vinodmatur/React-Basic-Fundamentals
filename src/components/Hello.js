import React from "react";

const Hello = () => {
    //Jsx Code
        // return(
        //     <div className = 'dummyClass'>
        //         <h1>Hello Vinod!</h1>
        //     </div>
        // )
    //Without Jsx
    return React.createElement(
        'div', 
        //null, 
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Vinod!'))
}

export default Hello