import React,{useState,useRef,useEffect} from 'react';

function MyComponent() { 

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=> { 
        console.log("COMPONENT RENDERED ");
    })

    function handlechange1(){ 
    //    without component rendering 
        // inputRef.current++;
        // console.log((inputRef.current));

        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handlechange2(){ 
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handlechange3(){ 
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef1.current.style.backgroundColor = "";
    }

    return (
        <div>
            <button onClick={handlechange1}>
                Click me1!
            </button>
            <input ref={inputRef1} />

            <button onClick={handlechange2}>
                Click me2!
            </button>
            <input ref={inputRef2} />

            <button onClick={handlechange3}>
                Click me3!
            </button>
            <input ref={inputRef3} />

        </div>
    );
}

export default MyComponent;
