import React,{useState,useEffect} from 'react';
function MyComponent(){ 
    const[count,setcount] = useState(0);
    const[color,setcolor] = useState("green");
    //it changes the header file constanly after every renders
    // useEffect(() => { 
    //     document.title = `count:${count}`
    // });
 
    //it changes only once
    // useEffect(() => { 
    //     document.title = `count:${count}`
    // },[]); 

    useEffect(() => { 
        document.title = `count:${count}${color}`
    },[count]);

    function addCount(){ 
        setcount(c => c + 1);
    }

    function subtractCount(){ 
        setcount(c => c - 1);
    }

    function changeColor(){ 
        setcolor(c => c === "green" ? "red" : "color");
    }

    return (
        <>
            <p style={{color:color}}>Count:{count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subtractCount}>subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    );
}

export default MyComponent;