import React,{useState} from 'react';
function MyComponent(){ 
    const [name,setname] = useState("Guest");
    const [isEmployed,setisEmployed] = useState(false);

    const updateName = () => { 
        setname("Rahul Jha");
    }
    const updateisEmployed = () => { 
        setisEmployed(!isEmployed);
    }

    return (
        <div>
            <p> Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p> isEmployed : {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateisEmployed}>Set Employee Status</button>
        </div>

    );

}
export default MyComponent;