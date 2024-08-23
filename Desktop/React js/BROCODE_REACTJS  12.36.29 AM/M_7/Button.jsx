import React from 'react';

function Button() {
    // const handleClick = () => console.log("OUCH ");
    // const handleClick2 = (name) => console.log(`${name} You Clicked me `);
    // let count = 0;
    // const handleClick = (name) => {
    //     if(count < 3){
    //         console.log(`${name} Clicked  me ${count} times `);
    //         count ++;
    //     }else {
    //         console.log(`${name} Stop Clicking me `);
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "OUCH 😔";

    return (
        // <button onClick={handleClick}>Click me 😅</button>
        <button onDoubleClick={(e) => handleClick(e)}>Click me 😅</button>
    );
}

export default Button;
