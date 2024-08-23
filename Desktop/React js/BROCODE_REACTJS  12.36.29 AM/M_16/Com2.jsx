import React,{useState,useEffect} from 'react'


function Com2() { 
    
    const[width,setwidth] = useState(window.innerWidth);
    const[height,setheight] = useState(window.innerHeight);
    
    useEffect (() => { 
        window.addEventListener("resize",handleResize);
        console.log("Event Listener Added ");

        return  () => { 
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER REMOVED ");
        }

    },[]);
    
    function handleResize(){ 
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return ( 
        <>
        <p>Window Width:{width}px</p>
        <p>Window Height:{height}px</p>
        </>
    );

}

export default Com2;